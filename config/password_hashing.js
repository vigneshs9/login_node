const bcrypt = require('bcrypt');
const customError = require('./error_handling');
exports.hashPassword = async (password, salt = 10) => {
  try {
    const salted = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, salted);
    return hashedPassword;
  } catch (error) {
    throw new customError("Error occurs while hashing password");
  }
}