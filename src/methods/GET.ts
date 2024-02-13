import { IncomingMessage, ServerResponse } from 'http';
import { IUsersDB } from '../interfaces/users';

const getData = (req: IncomingMessage, res: ServerResponse, users: IUsersDB) => {
  if (req.url === "/api/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      title: "Not Found",
      message: "Route Not Found"
    }));
  };
}

export default getData;