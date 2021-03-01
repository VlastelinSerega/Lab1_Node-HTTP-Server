var http = require("http");

var getWeekDay = function() {
  let date = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
};

http
  .createServer(function(req, res) {
    if (req.url.indexOf("name=") + 1) {
      res.write(
        "Hello " +
          req.url.slice(req.url.indexOf("name=") + 5) +
          ", today is " +
          getWeekDay()
      );
    } else {
      res.write("Hello,Stranger. Today is " + getWeekDay());
    }
    res.end();
  })
  .listen(8080);
