const mongoose = require('mongoose');
const Gym = mongoose.model('Gym');


const locationsCreate = function (req, res) { 
    res
.status(200)
.json({"statuss" : "success"});

};
const gymsReadOne = function (req, res) {
    if (req.params && req.params.gymid) {  
        Gym
          .findById(req.params.gymid)
          .exec((err, location) => {
            if (!location) {
              res	
                .status(404) 
                .json({	
                  "message": "locationid not found"
                });	 
              return;
            } else if (err) {
              res	
                .status(404) 
                .json(err); 
              return; 	
            }
            res		
              .status(200)
              .json(location);
          });
      } else {		
        res		
          .status(404) 	
          .json({	
            "message": "No id specified in request!!"
          });		
      }
    };
    
const loadGyms = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const locationsUpdateOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const locationsDeleteOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };

module.exports = {
  loadGyms,
  locationsCreate,
  gymsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
