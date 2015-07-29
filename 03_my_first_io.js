var fs = require('fs');

var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename);
var fileString = fileBuffer.toString();

console.log(fileString.split('\n').length);