import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

//THis is an object to specify the connection.
interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

//Next.js needs to connect to the database every time a request is made, because next.js is serveless.
//To optimise our resources we need to cache our connections.
let cached: MongooseConnection = (global as any).mongoose

if(!cached){
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw Error('Missing MONGODB_URL');

    cached.promise = 
        cached.promise || 
        mongoose.connect(MONGODB_URL, {
            dbName: 'photoai', bufferCommands: false
        })

        cached.conn = await cached.promise

        return cached.conn
}