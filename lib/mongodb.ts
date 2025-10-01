import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Global cache untuk koneksi
declare global {
  var mongooseConn: typeof mongoose | null;
}

global.mongooseConn = global.mongooseConn || null;

export async function connectDB() {
  if (global.mongooseConn) return global.mongooseConn;

  global.mongooseConn = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });

  return global.mongooseConn;
}