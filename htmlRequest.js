var http = require("http");

var requestOptions = {
    host: "example.com",
    path: "/"
  };


function printExampleHTML(callback) {
  http.get(requestOptions, function (response){

    var str = '';                                     /*callbacks are always functions are executed by the enclosing function.
                                                        often after a specific task is complete.*/
    response.on('data', function (data) {
      str += data;
    });

    response.on("end", function() {
      callback(str);
    });
  });
}

function callbackFunction (str) {
  console.log(str);
}
printExampleHTML(callbackFunction);

