module.exports = data => `
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/css/styles.css">
    <style>
        body {
            background-color: #000814;
            color: #fff;
        }
        .error {
            margin: auto;
            width: 60%;
            border: 3px solid #FEA920;
            padding: 10px;
            text-align: center;

        }
        h1 {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10px;
            text-decoration: none;
            color: #FEA920;

        }

        a {
            color: #FEA920;
            text-decoration: none;
        }
        
    </style>
    <title>Error!</title>
  </head>
  <body>
    <div class="error">
      <header>
        <h1>
           ${data.title}
        </h1>
        <p> ${data.detail}</p>
      </header>
      <div>
        <a href="/"> Please try again </p>
    </div>
  </body>
</html>`;
