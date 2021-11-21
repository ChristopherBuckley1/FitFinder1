const mongoose = require('mongoose');

const dbURI = "mongodb+srv://admin:admin@loc8r.atgil.mongodb.net/fitfinder?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./gyms');
