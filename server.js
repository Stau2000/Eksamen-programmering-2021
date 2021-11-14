

//SERVER

//Filesystem
const fs = require("fs")

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
});

//________________________________________________________________________

//Forblive logget ind
// vi skal nok bruge et put request til at kunne forblive logget ind

//app.put("/forbliv logget ind")

//________________________________________________________________________

//Log ud
//ved ikke helt hvordan dette skal kunne gøres endnu

//________________________________________________________________________

//Opret profil
//vi skal bruge en POST til at oprette en bruger:
//(skal lige finde ud af hvordan den skal laves)
app.post("/opret_bruger/:email-:password-:name-:address-:phonenumber", (req, res) => {
    const loadedProfiles = loadProfileDatabase()
    
    loadedProfiles.lastProfileID++;
    const newprofile = {
        id:`p${loadedProfiles.lastProfileID}`,
        email: req.params.email,
        password: req.params.password,
        name: req.params.name,
        address: req.params.address,
        phonenumber: req.params.phonenumber
    }
    loadedProfiles.profiles.push(newPeofile)

    console.log(loadedProfiles)

    saveProfileDatabase(loadedProfiles)
})

//________________________________________________________________________

//Min profil
app.get("/min_profil", (req,res) => {
    res.status(200).json("MIN PROFIL")
});

//________________________________________________________________________

//Opdater profil
//vi skal bruge en put til at opdatere profilen
//(skal også finde ud af hvordan den skal laves)
//app.put("/opdater_profil/:id", (req, res) => {});

//________________________________________________________________________

//Slette profil
//vi skal bruge et delete request til at slette profilen
//app.delete("/slet_profil", (req, res) => {});
//________________________________________________________________________

/*
OPRET ANNONCE
vi skal bruge en post til at oprette en annonce
(Skal også finde ud af hvordan dette gøres)
TANKE: hvis opret bruger løses er det samme tilgang som skal bruges her 
*/
//app.post("/opret annonce")

//________________________________________________________________________

//Opdatere annonce
//vi skal her bruge et put request til at opdatere en annonce
//(hvis "opdater profil" løses er det nok samme tilgang her)

//________________________________________________________________________
//Slet annonce
//app.delete("/slet_annonce", (req, res) => {});

//________________________________________________________________________

//

//________________________________________________________________________

//dette er ikke et krav, men kunne være nice med en knap til disse
//KONTAKT 
app.get("/kontakt", (req, res) => {
    res.status(200).json("kontakt")
});

// OM OS
app.get("/om_os", (req, res) => {
    res.status(200).json("om os")
})

//Helpers
const loadProfileDatabase = () => {
    const rawdata = fs.readFileSync("profiles.json");
    const profiles = JSON.parse(rawdata);
    return profiles
}

const saveProfileDatabase = (changedProfiles) => {
    const data = JSON.stringify(changedProfiles);
    fs.writeFileSync("profiles.json", data);
}