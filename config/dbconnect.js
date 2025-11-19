import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(` Database connected successfully`);
  } catch (error) {
    console.log(" MongoDB Connection Error:");
    console.log(error.message);
  }
};

export default connectDb;

// import mongoose from "mongoose";

// const connectDb = async (DATABASE_URL) => {
//   try {
//     await mongoose.connect(DATABASE_URL);
//     console.log(`Database connected successfully`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error.message);
//     process.exit(1); 
//   }
// };

// export default connectDb;
