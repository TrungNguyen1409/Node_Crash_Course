//Module Wrapper Function

//console.log(__dirname, __filename);

const Person = require('./person'); // common JS khac voi ES6


const person1 = new Person('John Doe', 30);

person1.greeting();