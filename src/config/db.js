// db.js
import mongoose from "mongoose";

const dbConfig = async () => {
    const mongourl = process.env.MONGO_URL;
    if (!mongourl) {
        console.error("MONGO_URL is not defined in the environment variables.");
        process.exit(1);
    }
    try {
        await mongoose.connect(mongourl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default dbConfig;
