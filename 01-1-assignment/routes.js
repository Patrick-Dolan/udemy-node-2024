const requestHandler = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to the assignment site!</h1>");
    res.write(`<a href="http://localhost:3000/users">Users</a>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Users</h1>");
    res.write("<ul>")
    res.write("<li>User1</li>")
    res.write("<li>User2</li>")
    res.write("<li>User3</li>")
    res.write("</ul>")
    res.write(`<a href="http://localhost:3000/">Return home</a>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<body>");
  res.write(`<h1>This site has no content at localhost:3000${url}.</h1>`);
  res.write(`<a href="http://localhost:3000/">Return home</a>`);
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;