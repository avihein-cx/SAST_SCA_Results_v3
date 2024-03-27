const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet.hsts({ 
  maxAge: 31536000,  // Set the `max-age` value to 1 year
  includeSubDomains: true, // Add the `includeSubDomains`
  preload: true // Opt-in for HSTS preload list
}));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/torterra-dashboard/index.html'));
});

// method continues ...

// method continues ...


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
