import { MongoClient } from "mongodb";
// import { MONGO_SRV } from ".env"

export default async function saveLocation(name, location) {
    const uri = "mongodb+srv://admin:qlSn74Ehgjkmw26e@cluster0.gpiuvk9.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        const database = client.db("locationPinger");
        const collection = database.collection("locations");
        // create a document to insert
        const doc = {
            user: name,
            location: location,
            created_at: Date.now()
        }
        const result = await collection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}