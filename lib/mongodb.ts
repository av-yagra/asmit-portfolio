import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    const mongoClient = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = mongoClient.connect();
  }

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  const mongoClient = new MongoClient(uri, options);
  clientPromise = mongoClient.connect();
}

export default clientPromise;