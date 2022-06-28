const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free memmory
console.log(os.freemem());
console.log(os.totalmem());
console.log("Free memory: " + ((os.freemem)/(os.totalmem))*100 + "%");

//Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime() + " seconds");