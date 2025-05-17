const loginModel = require('../../models/login/index');

exports.addUser = async (req, res) => {
  try {
    const params = req['body'];
    await loginModel.addUser(params);
    res.status(200).json({ "status": true, "msg": "Record added successfully" });
  } catch (error) {
    res.status(400).json({ "status": false, "error": [{ "msg": error }] });
  }
}
exports.getUser = async (req, res) => {
  try {
    const params = req['body'];
    const result = await loginModel.getUser(params);
    res.status(200).json({ "status": true, "data": result });
  } catch (error) {
    res.status(400).json({ "status": false, "error": [{ "msg": error }] });
  }
}