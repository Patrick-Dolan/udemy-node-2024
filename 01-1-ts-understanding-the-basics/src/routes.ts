import { IncomingMessage, ServerResponse } from "http";
// import fs from "fs";

// Current version is set to use this global variable to list off messages as they are send via the homepage form.
const messages: string[] = [];

export const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  // Homepage
  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Typescript node server home</h1>");
    res.write(
      '<form action="/create-message" method="POST"><input name="message"><button>Send</button></form>'
    );
    if (messages.length < 1) {
      res.write("<p>No messages to display.</p>");
    } else {
      res.write("<ol>");
      messages.map((message) => {
        res.write(`<li>${message}</li>`);
      });
      res.write("</ol>");
    }
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-message" && method === "POST") {
    let body: Buffer[] = [];
    req.on("data", (chunk: Buffer) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const messageText = parsedBody.split("=")[1];
      messages.push(messageText);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      // File writing version
      // fs.writeFile(
      //   `./dist/message-${Math.random()}.txt`,
      //   messageText,
      //   (err) => {
      //     if (err) throw err;
      //     res.statusCode = 302;
      //     res.setHeader("Location", "/");
      //     res.end();
      //   }
      // );
    });
  }

  // Default route
  res.write("<html>");
  res.write("<body>");
  res.write(`<h1>This site has no content at localhost:3000${url}.</h1>`);
  res.write(`<a href="http://localhost:3000/">Return home</a>`);
  res.write("</body>");
  res.write("</html>");
  res.end();
};
