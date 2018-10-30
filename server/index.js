const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const control = require("./controllers/controller");
const port = process.env.PORT || 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/api/breweries", control.getBrew);
app.post("/api/breweries", control.addBrew);
app.put("/api/breweries/:name", control.updateBrew);
app.delete("/api/breweries/:id", control.deleteBrew);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
