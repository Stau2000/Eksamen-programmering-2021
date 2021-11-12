
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

//_______________________________________________________________________
//Forside
app.get("/", (req,res) => {
    res.status(200).json("FORSIDE")
});

//_______________________________________________________________________

//Log ind
app.get("/log_ind",  (req, res) => {
    res.status(200).json("LOG IND")
})