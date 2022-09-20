// Importing required modules
const { application } = require("express");
const express = require("express");
const pokemonDb = require("../modules/pokemon-db.js");

// Setup an express Router
const router = express.Router();

// TODO Add your route handlers here
//Get a pokemon by id
router.get("/services/pokemon", function(req, res){
    const pokemonId = parseInt(req.query);
    // res.locals.pokemonId;
    const pokemonById = pokemonDb.getPokemonById(pokemonId);


});

//Get the type effectiveness data
router.get("/services/pokemon/types", function(req, res){
    // const pokemonType = req.query.types;
    const typeData = pokemonDb.getTypeData();

});

//Get a randome pokemon
router.get("/services/pokemon/random", function(req, res){
    const index = randomNum();
    const pokemonRandom = pokemonDb.getPokemonByArrayIndex(index);

});

//Randome number
function randomNum(){
    return Math.floor(Math.random()* (pokemonDb.getNumPokemon())) + 1;
   
}


// Export the router so we can access it from other JS files using require()
module.exports = router;