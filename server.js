// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function() {
  server.use( express["static"]( __dirname ) );
  server.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  server.use(server.router);
});

// SERVER
// ======
http.createServer(server).listen(port);
console.log( "Server started @ " + port );