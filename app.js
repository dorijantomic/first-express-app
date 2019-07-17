 const http = require('http');


/*
 The createServer method allows us to create a server, it requires a request and a response.
 When a request is received the response will be triggered
 the request and response of our server constant is now handled inside of routes 
 so when a request to the server is made the routes handler function will run and manage the requests

*/
 const server = http.createServer(); // The code is now cleaner as all the routing is switched into it's own file

// The server that we've made above requires a method to be callede on it which tells it to listen for users that enter localhost(3000) <-- we define the port
 server.listen(3000)