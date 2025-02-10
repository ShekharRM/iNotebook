const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/inotebook'; // Specify database name

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Wait 5s before throwing an error
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); // Exit process if connection fails
    }
};

module.exports = connectToMongo;
