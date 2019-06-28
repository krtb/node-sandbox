# Global Object

* part of the global scope, can access anywhere
  

## Global objects in JS:
  
  * console.log(); // global
  * setTimeout()
    
  * setInterval()
    * set to repeatedly call a function after a given delay
  * clearInterval()
    * use to stop a function from being called repeatedly
  * window
    * all functions and variables that exist globally can be accessed here.
  * JS engine will preface with window

    ```
        window.console.log
        console.log
    ```

## No window object in Node
* instead we have the global object
* don't need to prefix with global
  ```
  global.setTimeOut
  setTimeOut
  ```

* variable defined in node are not added to the global object, like in browsers
```
var message = ''
console.log(global.message)
```
* variables and functions defined here not added to global object
* this is due to the node modular system
