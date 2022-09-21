// Importing required modules
const { application } = require("express");
const express = require("express");
const pokemonDb = require("../modules/pokemon-db.js");

// Setup an express Router
const router = express.Router();

// TODO Add your route handlers here
//Get a pokemon by id
router.get("/services/pokemon", function(req, res){
    const pokemonId = parseInt(req.query.id);
    console.log(`parseInt(req.query.id):${parseInt(req.query.id)}`);
    
    const pokemonById = pokemonDb.getPokemonById(pokemonId);
    res.json(pokemonById);
    
    


});

//Get the type effectiveness data
router.get("/services/pokemon/types", function(req, res){
    
    console.log(`req.query.types: ${req.query.types}`);
    const typeData = pokemonDb.getTypeData();
    res.json(typeData);

});

//Get a randome pokemon
router.get("/services/pokemon/random", function(req, res){
    const index = randomNum();
    console.log(`req.query.id:${req.query.id}`);
    const pokemonRandom = pokemonDb.getPokemonByArrayIndex(index);
    res.json(pokemonRandom);

});

//Randome number
function randomNum(){
    const pokemonLength = pokemonDb.getNumPokemon();
    return Math.floor(Math.random()* (pokemonLength)) + 1;
   
}


// Export the router so we can access it from other JS files using require()
module.exports = router;