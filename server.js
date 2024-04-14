const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),   
config = require("./DB");

//  API file for interacting with MongoDB
const cafeRoute = require("./routes/cafe.route");
const employeeRoute = require("./routes/employee.route");

mongoose.Promise = global.Promise;

const mongodbConnectionString =
config.DB;

mongoose
  .connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

const app = express();

  app.use(cors());

app.use(express.json());

app.use("/cafe", cafeRoute);
app.use("/employee", employeeRoute);

const port = process.env.port || 4000; 

const server = app.listen(port, function () {
  console.log("Listening on  " + port);
});


