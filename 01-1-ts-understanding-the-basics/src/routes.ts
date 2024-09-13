import { IncomingMessage, ServerResponse } from "http";

export const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;

  // Default route
  res.write("<html>");
  res.write("<body>");
  res.write(`<h1>This site has no content at localhost:3000${url}.</h1>`);
  res.write(`<a href="http://localhost:3000/">Return home</a>`);
  res.write("</body>");
  res.write("</html>");
  res.end();
};
