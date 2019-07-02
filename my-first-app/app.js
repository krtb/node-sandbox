const EventEmitter = require('events');
//uppercase convention to show that it's a class
const emitter = new EventEmitter();

//register a listener
//first is a message, second is a callback function
// addEventListener === on
emitter.on('messageLogged', function(arg){
    //with arg technique, can pass data about event that just happened
    console.log('listener called', arg);
})

//raise an event
// second arg is the `event argument`
emitter.emit('messageLogged', {id: 1, url: 'http://'})
