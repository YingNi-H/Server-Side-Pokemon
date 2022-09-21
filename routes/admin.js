const { application } = require("express");
const express = require("express");
const pokemonDb = require("../modules/pokemon-db.js");
const router = require("./web-service.js");
const webService = require("./web-service.js");

//Add router handler
router.get("/admin", function(req, res){

    //There is objects array
    console.log(`pokemonDb.getAllPokemon():${pokemonDb.getAllPokemon()}`);

    res.locals.context = pokemonDb.getAllPokemon(); 
    res.render("admin");

});

module.exports = router;