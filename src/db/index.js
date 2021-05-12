const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://webadmin:20011004@cluster0.7lbmt.mongodb.net/webmanagement?retryWrites=true&w=majority",
      "mongodb://127.0.0.1:27017/admission_dev",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("connect db successfully!");
  } catch (error) {
    console.log(error);
    console.log("connect db failed!");
  }
};

module.exports = { connect };
