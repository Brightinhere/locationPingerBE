import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv';

dotenv.config()

function getClient() {
    return new MongoClient(process.env.MONGO_SRV)
}

export async function saveLocation(location, name) {
    const client = getClient()
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

export async function getLast(){
    const client = getClient()
    try {
        let item = null
        const database = client.db("locationPinger")
        const collection = database.collection("locations")
        const lastItem = collection.find().sort({"created_at": -1}).limit(1).next().then(async (doc) => {
            item = await doc
            return doc
        })
        console.log(lastItem)
        return lastItem
    } finally {
        await client.close();
    }

}
export async function saveUser(user) {
    const client = getClient()
    try {
        const database = client.db("locationPinger");
        const collection = database.collection("users");
        // create a document to insert
        const doc = {
            user: name,
            created_at: Date.now()
        }
        const result = await collection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}