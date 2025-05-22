const usersModel = require('../../models/users');

exports.addUser = async (req, res) => {
  try {
    const params = req['body'];
    await usersModel.addUser(params);
    res.status(200).json({ "status": true, "msg": "Record added successfully" });
  } catch (error) {
    res.status(400).json({ "status": false, "error": [{ "msg": error.msg }] });
  }
}
exports.getUser = async (req, res) => {
  try {
    const params = req['body'];
    const result = await usersModel.getUser(params);
    res.status(200).json({ "status": true, "data": result });
  } catch (error) {
    res.status(400).json({ "status": false, "error": [{ "msg": error.msg }] });
  }
}
exports.comparePassword = async (req, res) => {
  try {
    const params = req['body'];
    const result = await usersModel.comparePassword(params);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ "status": false, "error": [{ "msg": error.msg }] });
  }
}