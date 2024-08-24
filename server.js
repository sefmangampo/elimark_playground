const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {

  const filePath = path.join(__dirname, "public", req.path);


  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      res.sendFile(filePath);
    } else {

      res.sendFile(path.join(__dirname, "public", "index.html"));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
