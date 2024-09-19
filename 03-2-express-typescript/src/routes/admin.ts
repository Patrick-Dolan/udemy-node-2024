import express from "express";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send("<h1>Admin: Add product page</h1>");
});

export default router;
