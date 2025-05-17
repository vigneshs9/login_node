require('./constants');
const { MongoClient, ObjectId } = require("mongodb");

const username = "vigneshs9";
const password = "Suthapalli%402002";
const url = `mongodb+srv://${username}:${password}@vignesh.p5bvfjh.mongodb.net/?retryWrites=true&w=majority&appName=vignesh`;
const client = new MongoClient(url);
let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(DATA_BASE);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
};

const getDB = () => db;

const getId = (str = null) => {
  const id = str == null ? new ObjectId() : new ObjectId(str);
  return id;
}

module.exports = { connectDB, getDB, getId };