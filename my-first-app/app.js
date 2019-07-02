const EventEmitter = require('events');
//uppercase convention to show that it's a class
  

const Logger = require('./logger');
const logger = new Logger()

//register a listener
//first is a message, second is a callback function
// addEventListener === on
logger.on('messageLogged', (arg) => {
    //with arg technique, can pass data about event that just happened
    console.log('listener called', arg);
})

logger.log('message');

