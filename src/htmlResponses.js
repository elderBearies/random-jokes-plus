const errorPage = `
<html>
  <head>
    <title>404 - File Not Found!</title>
  </head>
  <body>
    <h1>404 - File Not Found!</h1>
    <p>Yeah, sorry. There's nothing here. Try <a href='/random-joke'>/random-joke</a> or <a href='/random-jokes?limit=10'>/random-jokes?limit=10</a> instead!</p>
  </body>
</html>`;

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' }); // send response headers
  response.write(errorPage); // send content
  response.end();
};

module.exports.get404Response = get404Response;
