var request = require("request");
request('https://example.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }


});