const mongo = require('../../config/db');
const hashPassword = require('../../config/password_hashing');
const jwt = require('../../config/jwt');
exports.addUser = async (params) => {
 try {
  const password = await hashPassword.hashPassword(params['password'], 10)
  const db = mongo.getDB();
  const usersCollection = db.collection(USERS_COLLECTION);
  const result = await usersCollection.countDocuments({ "name": params['name'], "email": params['email'] })
  if (result > 0) {
   return { "status": false, "error": [{ "msg": "Ooops!!! User already exists" }] }
  }

  const insertObj = {
   name: params['name'],
   email: params['email'],
   password: password,
  }
  await usersCollection.insertOne(insertObj);
  return { "status": true, "msg": "Inserted Successfully!!!" };
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
exports.comparePassword = async (params) => {
 try {
  const db = mongo.getDB();
  const result = await db.collection(USERS_COLLECTION).find({ name: params['name'] }).toArray();
  if (result.length == 1) {
   const isPasswordCorrect = await hashPassword.comparePassword(result[0]['password'], params['password']);
   if (isPasswordCorrect) {
    const token = jwt.generateToken(result[0]);
    return { "status": isPasswordCorrect, "token": token }
   } else return { "status": false }
  } else return { "status": false }
 } catch (error) {
  throw new Error("Error while comparing password");
 }
}