const { application } = require("express");
const express = require("express");
const pokemonDb = require("../modules/pokemon-db.js");
const makeArray = require("../modules/make-array.js");
// const multerUploader = require("../modules/multer-uploader.js");


// Setup an express Router
const router = express.Router();


//Add router handler
router.get("/admin", function(req, res){

    //It is objects array
    console.log(`pokemonDb.getAllPokemon():${pokemonDb.getAllPokemon()}`);

    res.locals.context = pokemonDb.getAllPokemon(); 
    res.render("admin");

});

//Access the form
router.get("/newPokemon", function(req, res){
    res.render("new-pokemon-form");
});

//Body parser setup
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false}));

// Setup fs
const fs = require("fs");

// Setup body-parser
router.use(express.urlencoded({ extended: false }));

// Setup multer (files will temporarily be saved in the "temp" folder).
const path = require("path");
const multer = require("multer");
const upload = multer({
    dest: path.join(__dirname, "temp")
});

//Access to client submission
router.post("/newPokemon", upload.single("imageFile"), function(req, res){

    // Move the file somewhere more sensible
    const fileInfo = req.file;
    const oldFileName = fileInfo.path;
    const newFileName = `./public/images/pokemon/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);

    
    //Create a new Pokémon JSON object and save it to the pokemonDb
    const newPokemon = {
        id: parseInt(req.body.id),
        name: req.body.name,
        imageUrl: fileInfo.originalname,
        types: makeArray(req.body.types),
        description: req.body.description,
        
    }

     pokemonDb.addPokemon(newPokemon);
     res.locals.context = pokemonDb.getAllPokemon();
    // res.json(newPokemon); New pokemon json successful!
    // res.json(pokemonDb.getAllPokemon());


    

    res.render("admin");

});



module.exports = router;