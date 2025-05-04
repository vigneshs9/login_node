const { MongoClient } = require("mongodb");

const url = "";
const client = new MongoClient(url);

exports.connect = async (col) => {
    try {
        await client.connect();
        console.log("Connected!!!");
        const db = client.db('login');
        const collection = db.collection(col);
        const result = await collection.findOne({});
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close()
    }
}
this.connect("mydata")