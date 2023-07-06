import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://pramudithaniroshan:KxiNT3NUmxYOobul@cluster0.3unumaa.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.llection("meetups");
    const result = await meetupsCollection.insertOne({
      data,
    });
    console.log(result);
    client.close();
    res.status(200);
  }
}

export default handler;
