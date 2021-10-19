const User = require('../models/user');
const Post = require('../models/post');


exports.index = function (req, res, next) {

};

/* Create */

exports.post_create_get = function (req, res, next) {

};

exports.post_create_post = function (req, res, next) {
  
};

/* Read */

// Display list of all posts
exports.post_list = function (req, res, next) {

  Post.find()
    .exec(function (err, post_list) {
      if (err) { return next(err); }
      res.render('post_list', { title: 'Post List', post_list: post_list });
      res.json({ title: 'Post List', post_list: post_list });
    });

};

// Display detail for a specific post
exports.post_detail = function(req, res, next) {

  Post.findById(req.params.id)
    .populate('author')
    .exec(function (err, post) {
      if (err) { return next(); }
      if (post==null) {
        var err = new Error('Post not found');
        err.status = 404;
        return(next(err));
      }
      //Successful => Render
      res.render('post_detail', { title: 'Post Detail', post: post});
    });

};

/* Update */

exports.post_update_get = function (req, res, next) {

};

exports.post_update_post = function (req, res, next) {
  
};

/* Delete */

exports.post_delete_get = function (req, res, next) {

};

exports.post_delete_post = function (req, res, next) {
  
};