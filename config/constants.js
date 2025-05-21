require('dotenv').config();

global.PORT = process.env.PORT || 3000;
global.DATA_BASE = process.env.DATABASE_NAME;
global.USER_NAME = process.env.USER_NAME;
global.PASSWORD = process.env.PASSWORD;

global.USERS_COLLECTION = 'users';