const mongoose = require('mongoose');



const locationsCreate = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const loadGyms = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const locationsReadOne = function (req, res) {
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
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
