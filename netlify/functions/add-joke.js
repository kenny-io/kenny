const { createClient } = require("@supabase/supabase-js");
const {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  RAPIDAPI_HOST,
  RAPIDAPI_KEY
} = process.env;
// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const { schedule } = require("@netlify/functions");
const axios = require("axios");

exports.handler = schedule("* * * * *", async (event, context) => {
  let jokeData = "";
  const options = {
    method: "GET",
    url: "https://jokeapi-v2.p.rapidapi.com/joke/Programming",
    params: {
      format: "json",
      idRange: "1-300",
      type: "twopart",
      blacklistFlags: "religious,political,racist,sexist,explicit,nsfw"
    },
    headers: {
      "x-rapidapi-host": RAPIDAPI_HOST,
      "x-rapidapi-key": RAPIDAPI_KEY
    }
  };

  await axios.request(options).then(res => {
    jokeData = res.data;
  });

  try {
    console.log("adding joke to supabase");
    const { data, error } = await supabase.from("funny-jokes").upsert({
      setup: jokeData.setup,
      delivery: jokeData.delivery
    });
    console.log(data, error);
  } catch (error) {
    console.log(error);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ jokeData })
  };
});
