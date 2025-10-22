const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

app.get("/about", (req, res) => {
  res.status(200).json(
    [
        {
         "Name": "Anakin",
         "Gender": "male", 
         "Homeworld": "Tatooine",
         "Born": "41.9BBY",
         "Jedi": "yes"
        },
        {
         "Name": "Amidala",
         "Gender": "female", 
         "Homeworld": "Naboo",
         "Born": "46BBY",
         "Jedi": "no"
        },
      
        {
         "Name": "R2-D2",
         "Gender": "unknown",
         "Homeworld": "Naboo",
         "Born": "33BBY",
         "Jedi": "no"
        }
    ]
  )
});



app.listen(3000, ()=>console.log("server is running on port 3000"))

// module.exports = app; // 
