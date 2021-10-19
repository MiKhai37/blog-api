const express = require('express');
const router = express.Router();

// Import Controllers
const user_controller = require('../controllers/userController');
const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

/* Post Routes */

// GET request home page, posts summary
router.get('/', post_controller.index)

// GET request for creating a post
router.get('/posts/create', post_controller.post_create_get)

// POST request for creating a post
router.post('/posts/create', post_controller.post_create_post)

// GET request to delete post.
router.get('/posts/:postid/delete', post_controller.post_delete_get);

// POST request to delete post.
router.post('/posts/:postid/delete', post_controller.post_delete_post);

// GET request to update post.
router.get('/posts/:postid/update', post_controller.post_update_get);

// POST request to update post.
router.post('/posts/:postid/update', post_controller.post_update_post);

// GET request for one post.
router.get('/posts/:postid', post_controller.post_detail);

// GET request for list of all posts.
router.get('/posts', post_controller.post_list);

/* User Routes */

// GET request for creating a user
router.get('/users/create', user_controller.user_create_get)

// POST request for creating a user
router.post('/users/create', user_controller.user_create_post)

// GET request to delete user.
router.get('/users/:userid/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/users/:userid/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/users/:userid/update', user_controller.user_update_get);

// POST request to update user.
router.post('/users/:userid/update', user_controller.user_update_post);

// GET request for one user.
router.get('/users/:userid', user_controller.user_detail);

// GET request for list of all users.
router.get('/users', user_controller.user_list);

/* Comment Routes */

// GET request for creating a comment
router.get('/comments/create', comment_controller.comment_create_get)

// PÖST request for creating a comment
router.post('/comments/create', comment_controller.comment_create_post)

// GET request to delete comment.
router.get('/comments/:comid/delete', comment_controller.comment_delete_get);

// POST request to delete comment.
router.post('/comments/:comid/delete', comment_controller.comment_delete_post);

// GET request to update comment.
router.get('/comments/:comid/update', comment_controller.comment_update_get);

// POST request to update comment.
router.post('/comments/:comid/update', comment_controller.comment_update_post);

// GET request for one comment.
router.get('/comments/:comid', comment_controller.comment_detail);

// GET request for list of all comments.
router.get('/comments', comment_controller.comment_list);

module.exports = router;