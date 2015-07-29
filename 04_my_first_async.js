var fs = require('fs');

var countLines = function (err, fileBuffer){
  console.log(fileBuffer.split('\n').length);
};

fs.readFile(process.argv[2], 'utf8', countLines);