const express = require("express");
const app = express();
const cors = require("cors");
const port =  4000;
const path = require('path');
const mainRoutes = require('./routes/staffmember.js')
app.use(cors());
app.use(express.json());
app.use(require("./routes/staffmember"));
app.use(require("./routes/workoutAssign"));
app.use(require("./routes/member"));
app.use(require("./routes/workout"));
app.use(require("./routes/items"));
app.use(require("./routes/fileuplaod"));

app.use('/uploads/images/', express.static(path.join(__dirname, 'uploads/images')));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});