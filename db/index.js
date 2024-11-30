import { MongoClient } from "mongodb";

let client;

try {
    if (!process.env.MONGODB_URI) {
        throw new Error("MongoDB URI is required");
    }
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect(); // Ensure to await the connection
} catch (error) {
    console.log(error);
    if (client) {
        await client.close(); // Close the client if it was created
    }
}
export default client;