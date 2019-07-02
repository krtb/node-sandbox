const EventEmitter = require('events');
//uppercase convention to show that it's a class
const emitter = new EventEmitter();

//register a listener
//first is a message, second is a callback function
// addEventListener === on
emitter.on('messageLogged', function(){
    console.log('listener called');
})

//raise an event
emitter.emit('messageLogged')
