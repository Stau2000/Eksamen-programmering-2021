let logged_in = false

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
app.post("/log_ind/:email-:password",  (req, res) => {
    const loginInfo = {
        email: req.params.email,
        password: req.params.password
    }
    const loadedProfiles = loadProfileDatabase()

    const profileWithEmail = loadedProfiles.profiles.find((x) => loginInfo.email == x.email);

    if (profileWithEmail) {
        if (loginInfo.password == profileWithEmail.password){
            console.log("LOGGED IN")
            logged_in = true
            res.status(200).send(profileWithEmail)
        }
        else{
            console.log("ERROR: Forkert password")
            res.status(401).send(false)
        }
    }
    else {
        console.log("ERROR: Email findes ikke")
        // Vi kunne returnere 404 for at sige at der ikke er nogen profiler der matcher den email,
        // men det ville være et sikkerhedsbrud, da en hacker dermed kunne bruteforce hvilke emails er oprettet.
        // Derfor returnerer vi også 401, så vi i frontend bare kan sige "forkert login" uafhængigt af om email var korrekt eller ej:
        // "Enten dit password eller email er forkert"
        res.status(401).send(false)
    }
});


//________________________________________________________________________

//Log ud
app.post("/log_ud", (res, req) => {
    const loggedOut = true
    
    if (loggedOut){
        res.status(200).send(true)
    }
    else{
        console.log("ERROR: kunne ikke logge ud")
        res.status(404).send(false)
    }
});

//________________________________________________________________________

//Opret profil
//vi skal bruge en POST til at oprette en bruger:
app.post("/opret_bruger/:email-:password-:name-:city-:address-:phonenumber", (req, res) => {
    const loadedProfiles = loadProfileDatabase()//henter database

    
    loadedProfiles.lastProfileID++; //summere 1 til ideet
    const newProfile = {
        id:`p${loadedProfiles.lastProfileID}`,
        email: req.params.email,
        password: req.params.password,
        name: req.params.name,
        city: req.params.city,
        address: req.params.address,
        phonenumber: req.params.phonenumber
    };

    loadedProfiles.profiles.push(newProfile); //pusher ny profil ind i profiles.json

    console.log(loadedProfiles);

    saveProfileDatabase(loadedProfiles); //gemmer den nye profil i databasen 
});

//________________________________________________________________________

//Min profil
app.get("/min_profil", (req,res) => {
    res.status(200).json("MIN PROFIL")
});

//________________________________________________________________________

//Opdater profil
//vi skal bruge en put til at opdatere profilen
//(skal også finde ud af hvordan den skal laves)
app.put("/opdater_profil/:id-:email-:password-:name-:city-:address-:phonenumber", (req, res) => {
    const loadedProfiles = loadProfileDatabase()

    //Dette er de nye oplysninger som bliver fetched fra klienten
    const updateInfo = {
        id: req.params.id,
        email: req.params.email,
        password: req.params.password,
        name: req.params.name,
        city: req.params.city,
        address: req.params.address,
        phonenumber: req.params.phonenumber
    };

    //finder profilen og index med det unikke id
    const profileWithId = loadedProfiles.profiles.find((x) => x.id == updateInfo.id)
    const indexOfProfileWithId = loadedProfiles.profiles.indexOf(profileWithId)
    
    loadedProfiles.profiles.splice(indexOfProfileWithId, 1, updateInfo); //splicer og erstater med de opdatede oplysninger

    saveProfileDatabase(loadedProfiles);
    res.status(200).send(true)
});

//________________________________________________________________________

//Slette profil
//vi skal bruge et delete request til at slette profilen
//fordi at vores id er unikt til brugeren er vi sikker på at vi ikke sletter flere brugere på samme tid
app.delete("/slet_profil/:id", (req, res) => {

    const loadedProfiles = loadProfileDatabase()
    const deleteInfo = {id: req.params.id}; //finder id'ets position i databasen

    const profileWithId = loadedProfiles.profiles.find((x) => x.id == deleteInfo.id) //finder brugeren som ønsker sin profil slettet i databasen 
    const indexOfProfileWithId = loadedProfiles.profiles.indexOf(profileWithId) //finder index for profileWithId
    
    loadedProfiles.profiles.splice(indexOfProfileWithId, 1); //splicer den fundne profil fra

    saveProfileDatabase(loadedProfiles);
    res.status(200).send(true)
});

//________________________________________________________________________

app.get("/brugere", (req, res) => {
    const loadedProfiles = loadProfileDatabase()

    res.status(200).json(loadedProfiles);
})


//________________________________________________________________________


//OPRET ANNONCE
//vi skal bruge en post til at oprette en annonce

app.post("/opret_annonce/:id-:category-:image-:price-:description", (req, res) => {
    const loadedGoods = loadGoodDatabase() //henter alt data fra vare databasen
    
    loadedGoods.lastGoodID++; //tillægger 1 til lastGoodID
    const newGood = {
        id:`g${loadedGoods.lastGoodID}`,
        userId: req.params.id,
        category: req.params.category,
        image: req.params.image,
        price: req.params.price,
        description: req.params.description
    };

    loadedGoods.goods.push(newGood); //pusher en vare i varedatabasen

    console.log(loadedGoods);

    saveGoodDatabase(loadedGoods); //gemmer alt datan med eventuelle ændringer
});
//________________________________________________________________________

//Opdatere annonce
//vi skal her bruge et put request til at opdatere en annonce
app.put("/opdater_annonce/:id"), (req, res) => {
    res.status(200).send(true)
}

//________________________________________________________________________
//Slet annonce
app.delete("/slet_annonce/:category", (req, res) => {
    
    const loadedGoods = loadGoodDatabase()
    const deleteGoodInfo = {category: req.params.category};

    const goodWithCategory = loadedGoods.goods.find((x) => x.category == deleteGoodInfo.category) //finder vare med samme kategori
    const indexOfGoodWithId = loadedGoods.goods.indexOf(goodWithCategory) //finder dets index
    console.log("SLET!")
    console.log(req.params.category)
    console.log(goodWithId)
    console.log(indexOfGoodWithId)
    
    loadedGoods.goods.splice(indexOfGoodWithId, 1); //splicer den fundne vare

    saveGoodDatabase(loadedGoods);
    res.status(200).send(true)
});

//_________________________________________________________________________

//hent annonce
app.get("/hent_annoncer/:category-:id", (req, res) => {
    const loadedGoods = loadGoodDatabase()

    if (req.params.category == "all") {
        const goodsWithUserId = loadedGoods.goods.filter((x) => x.userId == req.params.id)
        res.status(200).json(goodsWithUserId);
    }
    else {
        const goodsWithUserId = loadedGoods.goods.filter((x) => x.userId == req.params.id && x.category == req.params.category)
        res.status(200).json(goodsWithUserId)
    }

})
//________________________________________________________________________

//

//________________________________________________________________________

//Helpers
//database: profiler
const loadProfileDatabase = () => {
    const rawdata = fs.readFileSync("profiles.json");
    const profiles = JSON.parse(rawdata);
    return profiles
}

const saveProfileDatabase = (changedProfiles) => {
    const data = JSON.stringify(changedProfiles);
    fs.writeFileSync("profiles.json", data);
}

//database: varer
const loadGoodDatabase = () => {
    const rawGoodData = fs.readFileSync("goods.json");
    const goods = JSON.parse(rawGoodData);
    return goods
}

const saveGoodDatabase = (changedGoods) => {
    const dataGood = JSON.stringify(changedGoods);
    fs.writeFileSync("goods.json", dataGood);
}

findProfile = (profiles) => {
    return this.profiles.find((x) => profiles.email == x.email);
};
