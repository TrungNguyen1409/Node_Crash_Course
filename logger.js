const EventEmitter = require('events');

const uuid = require('uuid'); // uuid -> certain format of id

console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

class Logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message', {id: uuid.v4(), msg:msg});
    }
}

module.exports = Logger;