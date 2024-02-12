import http from "http";
import { getData } from "./src/methods/GET";
import { postData } from "./src/methods/POST";
import { putData } from "./src/methods/PUT";
import { deleteData } from "./src/methods/DELETE";

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      getData(req, res, users);
      break;
    case "POST":
      postData(req, res);
      break;
    case "PUT":
      putData(req, res);
      break;
    case "DELETE":
      deleteData(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({
        title: "Not Found",
        message: "Route Not Found"
      }));
      res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
