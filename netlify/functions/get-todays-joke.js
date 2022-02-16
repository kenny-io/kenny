const { createClient } = require("@supabase/supabase-js");
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;
// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
exports.handler = async (event, context) => {
  let todaysJoke = "";

  try {
    const { data, error } = await supabase
      .from("funny-jokes")
      .select("setup, delivery");
    todaysJoke = data.splice(-1)[0];
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todaysJoke)
  };
};
