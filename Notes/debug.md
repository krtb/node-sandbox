# Debug
    * npm i debug
    * require('debug')('app:startup') //give it a namespace as an argument
      * export DEBUG=app:startup // would set the environment variable in the terminal
        * would only see the debugging messages that are part of this namespace
    * export DEBUG=app:*
      * can use wildcard to see all console.logs
      * DEBUG=app:db nodemon index.js 