import createServer from "./server.js";

const newServer = createServer();

newServer.listen(8080, () => {
  console.log("Movie Server is running");
});
