const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/login/index');

router.route('/add_user').post([], (req, res) => {
  loginController.addUser(req, res);
})

router.route('/get_user').post([], (req, res) => {
  loginController.getUser(req, res);
})

module.exports = router;