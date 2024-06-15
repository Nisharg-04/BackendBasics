// require("dotenv").config({ path: "./env" });

import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB().then(() => {
  app.listen(8000, () => {
    console.log("Server is Running on port 8000");
  });
});
