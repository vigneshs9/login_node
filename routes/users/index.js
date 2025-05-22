const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/users');
const { check, validationResult } = require('express-validator');

router.route('/add_user').post([
  check('email', "Invalid Email").isEmail(),
  check('password', "Invalid Password").isAlphanumeric().isLength({ min: 8, max: 15 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(401).json({ "status": false, 'error': errors.array() })
  }
  else usersController.addUser(req, res);
})

router.route('/get_user').post([], (req, res) => {
  usersController.getUser(req, res);
})

router.route('/compare_password').post([], (req, res) => {
  usersController.comparePassword(req, res);
})
module.exports = router;