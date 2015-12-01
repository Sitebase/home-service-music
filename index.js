var express = require('express')

// load airsonos
require('airsonos/bin/index.js')

// Express page
var app = express();
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.get('/', function(request, response) {
    response.send('music micro service');
});
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});

process.on('SIGINT', function() {
    console.log('quit service');
    process.exit();
});
