var fs = require("fs");


fs.readFile("resource/data.txt", function (err, data) {
  if (err)
    return console.error(err);

  console.log(data.toString());
});

console.log("program end");
