const app = require("./app");
const { serverPort } = require("./secrect");

app.listen(serverPort, () => {
  console.log("listening on 3001");
});
