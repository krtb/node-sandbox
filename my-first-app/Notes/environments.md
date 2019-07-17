# Environments

* depending on the environment, may want to shut off some things
* process (object)
  * global object in node
  * gives us access to the current process
  * process.env
    * property that gives us the environment variables
    * process.env.NODE_ENV
      * standard process variable
      * return environment for this node application
        * if not set, would return undefined
        * can be set from development, production, etc.