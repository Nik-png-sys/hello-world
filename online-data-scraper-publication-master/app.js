//
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var port = 8081;
var app = express();

app.get('/imdb', function(req, res) {
  var url = "https://www.imdb.com/chart/top";

  request(url, function(error, response, html) {

    if( !error ){
      var imdb_data = [];

      var $ = cheerio.load(html);

      $('.lister').filter(function(){
        $(this).find('tr').each(function(i, element) {

          imdb_data[i] = "'" + $(this).find('img').attr('src') + "'";
        });
      });

      res.send(imdb_data);

      fs.writeFile('imdb_output.js', "var imdb_output = [ "+ imdb_data +"]", function(error){
          console.log("File is written successfully");
        });
    }
  });
});

app.listen(port);
console.log('Magic happens on port' + port);
exports = module.exports = app;
