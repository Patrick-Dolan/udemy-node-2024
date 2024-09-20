import express from "express";
import path from "path";

import srcDir from "../utils/srcDir";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(srcDir, "views", "add-product.html"));
});

export default router;
