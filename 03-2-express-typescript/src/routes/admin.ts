import express from "express";
import path from "path";

import srcDir from "../utils/srcDir";

type Product = {
  title: string;
};

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(srcDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const product = req.body as Product;
  console.log(product);
  res.redirect("/");
});

export default router;
