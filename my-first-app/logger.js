const EventEmitter = require('events');
 const emitter = new EventEmitter();

var url = 'https://mylogger.io/log'

class Logger extends EventEmitter {

    //  when a function is inside a class, called: a Method
    // no longer need the function keyword
    log(message) {
    //send an http request
    console.log(message);

    //raise an event
    // second arg is the `event argument`
    // `in this class can directly raise events, or emit them
    this.emit('messageLogged', { id: 1, url: 'http://' })

}
}



//both variable and function are private, scoped to this module and not visible from the outside
// simply adding a method the export object, found when yo console.log(module)
module.exports= Logger ;
// can also change the name of the variable that we want to export outside as well
// module.export.endPoint = url;


//node doesn't execute this code directly, wraps it inside of a function