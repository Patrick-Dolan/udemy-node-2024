const http = require('http');
const fs = require('fs');

// Here we have a basic routing system in just node code
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  // Homepage route: gives a basic html page with a form for the post route
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  // Post route: takes in a message from form, reads the data and writes it to a local file on server
  if (url === '/message' && method === 'POST') {
    // Read and store data in body
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    // returning here ensures that the code after the '/message' route isn't ran if its a post request
    return req.on('end', () => {
      // Parse chunks in body array through buffer data type to string
      // parseBody will be a string that is a key value of form name and form value, I.E. "{form-name}={form-value}"
      const parsedBody = Buffer.concat(body).toString();
      // Split key value pair string based on '=' --- Not a great solution but simple example
      const message = parsedBody.split('=')[1];
      // Write parsed data to message.txt file 
      // This uses the async method for writing to the file system
      // !!! Async methods should be used whenever possible !!!
      fs.writeFile(`message.txt`, message, (err) => {
        if (err) throw err;
        // Set redirection status code and header to reroute to homepage
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  // Default response configured to send a webpage with the url displayed
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Server response</title></head>');
  res.write(`<body><h1>${url}</h1></body>`);
  res.write('</html>');
  // returns the response after writing to it
  // The above res.ends don't cause errors because they return out of the overall callback function
  res.end();
});

// Sets up the port for the server to listen
server.listen(3000);