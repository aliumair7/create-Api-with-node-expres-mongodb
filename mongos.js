const mongoose=require("mongoose")
require("dotenv").config()
mongoose.Promise=global.Promise;
mongoose.connect(process.env.Mongouri, { useNewUrlParser: true });
