const express = require('express');
const helmet = require('helmet');
 
const app = express();
 
app.use(helmet.hsts({
  maxAge: 31536000,    // One year in seconds
  includeSubDomains: true,
  preload: true
}));
 
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/torterra-dashboard/index.html'));//SAST Node #0 (input): sendFile ()
// method continues ...
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
