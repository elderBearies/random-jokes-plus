// pull in the HTTP server module
const http = require('http');

// pull in utility functions
const utils = require('./utils');

// pull in external modules
const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./responses');

// locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// make a call table
const urlStruct = {
  '/': htmlHandler.getIndexResponse,
  '/random-joke': jsonHandler.getRandomJokeResponse,
  '/random-jokes': jsonHandler.getRandomJokeResponse,
  '/default-styles.css': htmlHandler.getCSSResponse,
  notFound: htmlHandler.get404Response,
};

// this is the function that will be called every time a client request comes in
// this time we will look at the `pathname`, and send back the appropriate page
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
  // grab params from url
  const urlData = utils.parseURL(request.url);

  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  const httpMethod = request.method;

  if (urlStruct[urlData.pathname]) {
    urlStruct[urlData.pathname](request, response, urlData.params, acceptedTypes, httpMethod);
  } else {
    urlStruct.notFound(request, response, httpMethod);
  }
};

// create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port); // method chaining!
