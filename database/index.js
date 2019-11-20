const db = require("mysql"); // connect to mysql
const connection = db.createConnection({
  user: "root",
  password: "plantlife",
  database: "cows"
});

connection.connect(error => {
  if (error) {
    console.error(error);
  } else {
    console.log("Success connection with mysql");
  }
});

module.exports = connection;
