const mongo = require('../../config/db');
const hashPassword = require('../../config/password_hashing');

exports.addUser = async (params) => {
  try {
    const password = await hashPassword.hashPassword(params['password'])
    const db = mongo.getDB();
    const insertObj = {
      name: params['name'],
      email: params['email'],
      password: password,
    }
    await db.collection(USERS_COLLECTION).insertOne(insertObj);
    return;
  } catch (error) {
    throw new Error("Error while adding user");
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