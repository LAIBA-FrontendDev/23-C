import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside your .env.local file configuration matrix."
  );
}

// Global cached connection registry initialization with safe explicit TypeScript type assertions mapping logic keys
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectToDatabase() {
  // Return persistent established runtime connection instance immediately if alive
  if (cached.conn) {
    return cached.conn;
  }

  // Construct secure asynchronous database connection promise flow securely
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null; // Flush failed query validation paths to trigger secure reconnect availability states
    console.error("Database cluster connection critical failure event pipeline tracking:", error);
    throw error;
  }

  return cached.conn;
}

