const express = require('express');
const router = express.Router();

// Import Controllers
const user_controller_api = require('../controllers/userControllerApi');
const post_controller_api = require('../controllers/postControllerApi');
const comment_controller_api = require('../controllers/commentControllerApi');

/* CRUD user */

// GET request for all users
router.get('/users', user_controller_api.user_list);

// GET request for specific user's details
router.get('/users/:id', user_controller_api.user_detail);

// POST request to create new user
router.post('/users', user_controller_api.user_create);

// PUT request to update an user
router.put('/users/:id', user_controller_api.user_update);

// DELETE request to delete an user
router.delete('/users/:id', user_controller_api.user_delete);


/* CRUD post */

// GET request for all users
router.get('/posts', post_controller_api.post_list);

// GET request for specific user's details
router.get('/posts/:id', post_controller_api.post_detail);

// POST request to create new user
router.post('/posts', post_controller_api.post_create);

// PUT request to update an user
router.put('/posts/:id', post_controller_api.post_update);

// DELETE request to delete an user
router.delete('/posts/:id', post_controller_api.post_delete);

module.exports = router;