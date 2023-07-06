import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
        'mongodb+srv://pramudithaniroshan:YTP5ciECDbHmvWUe@cluster0.3unumaa.mongodb.net/meetups?retryWrites=true&w=majority'
      );     
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({
      data,
    });
    console.log(result);
    client.close();
    res.status(200).json({message: 'Meetup inserted successfully!'});
  }
}

export default handler;
