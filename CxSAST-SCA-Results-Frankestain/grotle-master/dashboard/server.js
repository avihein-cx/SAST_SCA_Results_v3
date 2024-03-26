const express = require('express');
const path = require('path');
const helmet = require('helmet')

const app = express();

app.use(helmet({
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}))

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/torterra-dashboard'));

app.get('*', function(req,res) {// /CxSAST-SCA-Results-Frankestain/grotle-master/dashboard/server.js:18
  res.sendFile(path.join(__dirname + '/dist/torterra-dashboard/index.html'));
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
// method continues ...


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
