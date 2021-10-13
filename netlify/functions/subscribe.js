const fetch = require("node-fetch");
const querystring = require("qs");
const template = require("./error.js");
const { createClient } = require("@supabase/supabase-js");

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

exports.handler = async event => {
  const params = querystring.parse(event.queryStringParameters);
  console.log(params.email);

  // validate email format
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(params.email)) {
    return {
      statusCode: 302,
      body: JSON.stringify({
        message: "Email is invalid"
      }),
      headers: {
        Location: `/ohoh`
      }
    };
  }
  if (!params.email) {
    return {
      statusCode: 302,
      body: JSON.stringify({ msg: "Email is required" }),
      headers: {
        Location: `/ohoh`
      }
    };
  }

  // First save email to supabase database

  try {
    const { data, error } = await supabase.from("subscribers").upsert({
      email: params.email
    });
    console.log(data, error);
    // If we don't have errors, we can save the user to mailchimp

    const mailchimpInstance = process.env.MAILCHIMP_INSTANCE;
    const listUniqueId = process.env.MAILCHIMP_LIST_UNIQUE_ID;
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

    try {
      const response = await fetch(
        `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members`,
        {
          method: "POST",
          body: JSON.stringify({
            email_address: params.email,
            // merge_fields: {
            //   FNAME: firstname,
            //   LNAME: lastname
            // },
            status: "subscribed",
            tags: ["newsletter", "website"]
          }),
          headers: {
            Authorization: `apikey ${mailchimpApiKey}`,
            "Content-Type": "application/json"
          }
        }
      ).then(res => res.json());

      console.log(response);

      if (response.status === 400) {
        return {
          statusCode: 400,
          body: template(response)
        };
      }
      // return success

      return {
        statusCode: 302,
        body: JSON.stringify(response),
        headers: {
          Location: `/thanks`
        }
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message })
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 302,
      body: JSON.stringify({ msg: "Something went wrong" }),
      headers: {
        Location: `/ohoh`
      }
    };
  }
};
