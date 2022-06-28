//Module Wrapper Function

//console.log(__dirname, __filename);

const Person = require('./person'); // common JS khac voi ES6


const person1 = new Person('John Doe', 30);

person1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener: ` ,data));

logger.log('Hello World');
logger.log('Hello World');

logger.log('hey there');

// idea: log id and msg to a file and then have a file where all the log is stored using appendfile()
