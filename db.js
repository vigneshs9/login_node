const { MongoClient } = require("mongodb");
const username = "vigneshs9"
const password = "Suthapalli@2002"
const url = `mongodb+srv://${username}:${password}@vignesh.p5bvfjh.mongodb.net/?retryWrites=true&w=majority&appName=vignesh`;
const client = new MongoClient(url);
let db;
exports.connect = async () => {
  try {
    if(db != null) return db;
    db = await client.connect();
    console.log("Connected!!!");
    return db;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close()
  }
}
this.connect("mydata")