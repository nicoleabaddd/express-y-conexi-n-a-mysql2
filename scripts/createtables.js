var con = require('../config/debernode');

var libro = `CREATE TABLE IF NOT EXISTS libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Description VARCHAR(50)
  )`;
  
  con.query(libro, function (err, result) {
    if (err) throw err;
    console.log("libro table created");
  });
  
var bibliotecario = `CREATE TABLE IF NOT EXISTS bibliotecario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(15),
  secondname VARCHAR(15),
  carrera_id INT,
  FOREIGN KEY (carrera_id) REFERENCES Carrera(id) ON DELETE CASCADE
)`;

con.query(bibliotecario, function (err, result) {
  if (err) throw err;
  console.log("bibliotecario table created");
});



con.end(function(err) {
  if (err) throw err;
  console.log("Connectionclosed");
});