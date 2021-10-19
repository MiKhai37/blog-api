const User = require('../models/user');
var async = require('async');
const { body,validationResult } = require('express-validator');


// Get the list of all users
exports.user_list = function (req, res, next) {

  User.find()
    .exec(function (err, user_list) {
      if (err) { return next(err); }
      res.json(user_list)
    });

};

// Get details of one specific user
exports.user_detail = function (req, res, next) {
  User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) { return next(err); }
      if (user==null) {
        var err = new Error('User not found');
        err.status = 404;
        return next(err);
      }
      res.json(user);
      return;
    })
};

exports.user_create = [

  body('username', 'UserName must not be empty').trim().isLength({ min: 1 }).escape(),
  body('password', 'Passward must not be empty').trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    
    // Extract validation errors from request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);
      return;
    };

    const newUser = new User(
      {
        username: req.body.username,
        password: req.body.password,
      }
    );

    newUser.save(function (err) {
      if (err) { return next(err); }
      res.json(newUser);
      return;
    })

  }

];

exports.user_update = [

  body('username', 'UserName must not be empty').trim().isLength({ min: 1 }).escape(),
  body('password', 'Passward must not be empty').trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    
    // Extract validation errors from request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);
      return;
    };

    const user = new User(
      {
        username: req.body.username,
        password: req.body.password,
        _id: req.params.id
      }
    );

    User.findByIdAndUpdate(req.params.id, user, {}, function(err, theuser) {
      if (err) { return next(err); }
      res.json(user);
    })

  }

];

exports.user_delete = function (req, res, next) {

  User.findByIdAndRemove(req.params.id)
    .exec(function (err, user) {
      if (err) {return next(err); }
      if (user==null) {
        const err = new Error('User not found');
        err.status = 404;
        return next(err);
      }
      res.json(user);
      return;
    });

  };