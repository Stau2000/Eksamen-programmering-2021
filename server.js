
//SERVER

// Serveren lytter til port ****
const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json());

//Definere en port
const PORT = 4000;
app.listen(PORT, () => {
console.log(`Server is listening on http://localhost:${PORT}`)
});
