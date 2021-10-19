const Comment = require('../models/comment');


// Display list of all users
exports.comment_list = function (req, res, next) {

  Comment.find()
    .exec(function (err, comment_list) {
      if (err) { return next(err); }
      res.render('index', { title: 'Comment List', comment_list: comment_list })
      res.json({ title: 'User List', comment_list: comment_list })
    });

};

exports.comment_detail = function (req, res, next) {
  
};

exports.comment_create_get = function(req, res, next) {

};

exports.comment_create_post = function(req, res, next) {

};

exports.comment_delete_get = function(req, res, next) {

};

exports.comment_delete_post = function(req, res, next) {

};

exports.comment_update_get = function(req, res, next) {

};

exports.comment_update_post = function(req, res, next) {

};