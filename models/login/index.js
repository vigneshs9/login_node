const mongo = require('../../config/db');

exports.addUser = async (params) => {
  try {
    const db = mongo.getDB();
    const insertObj = {
      id: mongo.getId(),
      name: params['name'],
      email: params['email'],
      password: params['password'],
      confirm_password: params['confirm_password']
    }
    await db.collection(USERS_COLLECTION).insertOne(insertObj);
    return;
  } catch (error) {
    throw error;
  }
}
exports.getUser = async (params) => {
  try {
    const db = mongo.getDB();
    const result = await db.collection(USERS_COLLECTION).find().toArray();
    return result;
  } catch (error) {
    throw error;
  }
}