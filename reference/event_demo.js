const EventEmitter = require('events');

// Create class

class MyEmitter extends EventEmitter{}

// Init object 
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('connected to server', (arg1,arg2) => console.log('Server Client connection initiated ' + arg1 + ' ' +arg2));
myEmitter.on('unplug', (arg1,arg2) => console.log('Verbindung abgebaut ' + arg1 + ' ' +arg2));

// Init event
myEmitter.emit('connected to server', 'server 1', 'Trung');
myEmitter.emit('unplug', 'server 1', 'trung');
myEmitter.emit('event');