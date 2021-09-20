// pull in the HTTP server module
const http = require('http');

// pull in URL module
const url = require('url');

// pull in query module
const query = require('querystring');

// pull in external modules
const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./jsonResponses');

// locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// make a call table
const urlStruct = {
  '/random-joke': jsonHandler.getRandomJokeResponse,
  '/random-jokes': jsonHandler.getRandomJokeResponse,
  notFound: htmlHandler.get404Response,
};

// this is the function that will be called every time a client request comes in
// this time we will look at the `pathname`, and send back the appropriate page
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
  // console.log(request.headers);
  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;
  const params = query.parse(parsedUrl.query);
  const { limit } = params;

  if (!Number.isNaN(Number(params.limit))) {
    params.limit = Math.floor(params.limit);
  } else {
    params.limit = 1;
  }

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response);
  }
};

// create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port); // method chaining!
