# Event
* signal that something has happened in our app
* in node we have a class called HTTP
  * this can be used to build a web server
* listen on a given port
  * when that port receives a request, that HTTP class raises an event
  * read the request and return the right response
* EventEmitter

## Class
* container for properties and functiones we call methods
* to use EventEmitter have to use an instance of that class
* defines properties and behavior

## object
* is an instance of that class

## listener
* a listener is a function that will be called when that event is raised

## Recap

* if you want to raise events to signal that something has happened, you need to create a class
*  the class would extend `EventEmitter`
*  that class would have all functionality, and can add additional functionality
*  when you want to raise an event, `this.emit`, references the class you created