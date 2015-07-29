var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, listFiles);

function listFiles (error, list){
  list.forEach(function (file){
    var ext = file.split('.').pop();
    if (ext === extension){
      console.log(file);
    }
  });
}
