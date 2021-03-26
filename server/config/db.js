import mongoose from 'mongoose';

const mongoDbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default mongoDbConnect;
