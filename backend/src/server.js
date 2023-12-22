const app = require("./app");
const connectDB = require("./config/dbConfig");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log("listening on 3001");
  await connectDB();
});
