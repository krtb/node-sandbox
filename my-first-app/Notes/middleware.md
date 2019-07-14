# Middleware

* function that takes a request object
  * return response to client
  * or passes control to another middleware func

* in express, every function is a middleware function
  * terminate the request/response cycle

* When we submit request on server, goes through
  * REQUEST PROCESSING PIPELINE 
    * one or more middleware functions
    * each one terminates req/res cycle or passes control to other func
  * first is the middleware func that parses response into json object
  * doesn't terminate
  * passes control to route handler
    * here we can perform operation and then can terminate by returning response to client
    * logging, auth, etc.
    * an express app is nothing but middleware functions