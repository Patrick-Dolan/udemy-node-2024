import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Request received.");
});

app.listen(3000);
