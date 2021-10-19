const User = require('../models/user');


// Display list of all users
exports.user_list = function (req, res, next) {

  User.find()
    .exec(function (err, user_list) {
      if (err) { return next(err); }
      res.render('index', { title: 'User List', user_list: user_list });
    });

};

exports.user_detail = function (req, res, next) {
  
};

exports.user_create_get = function(req, res, next) {

};

exports.user_create_post = function(req, res, next) {

};

exports.user_delete_get = function(req, res, next) {

};

exports.user_delete_post = function(req, res, next) {

};

exports.user_update_get = function(req, res, next) {

};

exports.user_update_post = function(req, res, next) {

};