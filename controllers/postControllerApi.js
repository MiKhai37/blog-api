const User = require('../models/user');
const Post = require('../models/post');
const { body,validationResult } = require('express-validator');


exports.post_list = function (req, res, next) {

  Post.find()
    .exec(function (err, post_list) {
      if (err) { return next(err); }
      res.json(post_list)
    });

};

exports.post_detail = function (req, res, next) {

  Post.findById(req.params.id)
  .exec(function (err, post) {
    if (err) { return next(err); }
    if (post==null) {
      var err = new Error('Post not found');
      err.status = 404;
      return next(err);
    }
    res.json(post);
    return;

  })
};

exports.post_create = [

  body('author', 'Must have an author').trim().isLength({ min: 1 }).escape(),
  body('title', 'Must have a title').trim().isLength({ min: 1 }).escape(),
  body('text', 'Must have content').trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {

    // Extract validation errors from request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.json(errors);
      return;
    };

    const newPost = new Post(
      {
        author: req.body.author,
        title: req.body.title,
        text: req.body.text,
        timestamp: new Date().getTime(),
        comments: [],
        published: false,
      }
    )

    newPost.save(function (err) {
      if (err) { return next(err); }
      res.json(newPost);
      return;
    })
  }
  
];

exports.post_update = [
  
  body('title', 'Must have a title').trim().isLength({ min: 1 }).escape(),
  body('text', 'Must have content').trim().isLength({ min: 1 }).escape(),

];

exports.post_delete = function (req, res, next) {
  
  Post.findByIdAndRemove(req.params.id)
    .exec(function (err, post) {
      if (err) {return next(err); }
      if (post==null) {
        const err = new Error('Post not found');
        err.status = 404;
        return next(err);
      }
      res.json(post);
      return;
    });

};