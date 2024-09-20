// Package imports
import express from "express";
import path from "path";
import bodyParser from "body-parser";

// Local imports
import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";
import srcDir from "./utils/srcDir";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(srcDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(srcDir, "views", "page-not-found.html"));
});

app.listen(3000);
