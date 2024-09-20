import express from "express";
import path from "path";

import srcDir from "../utils/srcDir";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(srcDir, "views", "shop.html"));
});

export default router;
