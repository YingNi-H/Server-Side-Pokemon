const { application } = require("express");
const express = require("express");
const pokemonDb = require("../modules/pokemon-db.js");
const router = require("./web-service.js");
const webService = require("./web-service.js");

//Add router handler
router.get("/admin", function(req, res){
    //Wrong start:
    // const context = pokemonDb.getAllPokemon();

    //There is objects array
    console.log(`pokemonDb.getAllPokemon():${pokemonDb.getAllPokemon()}`);


    res.locals.context = pokemonDb.getAllPokemon(); 

    //This is cheat-sheet: Bottom-up to see how this works. 

    // res.locals.context = [
    //     {
    //         "id": 3,
    //         "name": "Venusaur",
    //         "imageUrl": "Venusaur.png",
    //         "types": [
    //             "Grass",
    //             "Poison"
    //         ],
    //         "description": "Venusaur, the Seed Pokémon. When Venusaur sprouts out its large flower petals and absorbs the rays of the sun, it becomes energized."
    //     },
    //     {
    //         "id": 6,
    //         "name": "Charizard",
    //         "imageUrl": "Charizard.png",
    //         "types": [
    //             "Fire",
    //             "Flying"
    //         ],
    //         "description": "Charizard, the Flame Pokémon. Charizard is a Flying and Fire type. When competing in intense battles, Charizard's flame becomes more intense as well."
    //     },
    //     {
    //         "id": 9,
    //         "name": "Blastoise",
    //         "imageUrl": "Blastoise.png",
    //         "types": [
    //             "Water"
    //         ],
    //         "description": "Blastoise, the Shellfish Pokémon. Blastoise's heavy body weight can make opponents unable to battle. It retreats into its shell when necessary."
    //     },
    //     {
    //         "id": 25,
    //         "name": "Pikachu",
    //         "imageUrl": "Pikachu.png",
    //         "types": [
    //             "Electric"
    //         ],
    //         "description": "Pikachu, the Mouse Pokémon. An Electric type. It raises its tail to sense its surroundings. If you pull on its tail, it will bite."
    //     },
    //     {
    //         "id": 36,
    //         "name": "Clefable",
    //         "imageUrl": "Clefable.png",
    //         "types": [
    //             "Fairy"
    //         ],
    //         "description": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step even lets it walk on water. It is known to take strolls on lakes on quiet, moonlit nights."
    //     },
    //     {
    //         "id": 39,
    //         "name": "Jigglypuff",
    //         "imageUrl": "Jigglypuff.png",
    //         "types": [
    //             "Normal",
    //             "Fairy"
    //         ],
    //         "description": "Jigglypuff, the Balloon Pokémon. When Jigglypuff's big eyes begin to quiver, everyone becomes sleepy as it sings a lullaby."
    //     },
    //     {
    //         "id": 131,
    //         "name": "Lapras",
    //         "imageUrl": "Lapras.png",
    //         "types": [
    //             "Water",
    //             "Ice"
    //         ],
    //         "description": "Lapras. This intellectually advanced Pokémon is able to understand human speech. With its mild temperament, Lapras prefers to carry humans on its back, rather than engage in Pokémon battles."
    //     },
    //     {
    //         "id": 143,
    //         "name": "Snorlax",
    //         "imageUrl": "Snorlax.png",
    //         "types": [
    //             "Normal"
    //         ],
    //         "description": "Snorlax, the Sleeping Pokémon. Snorlax becomes much too lazy to lift even a finger when it has a full belly, which then makes it safe to bounce upon."
    //     },
    //     {
    //         "id": 149,
    //         "name": "Dragonite",
    //         "imageUrl": "Dragonite.png",
    //         "types": [
    //             "Dragon",
    //             "Flying"
    //         ],
    //         "description": "Dragonite, the Dragon Pokémon. This extremely rare and highly intelligent type is able to fly faster than any known Pokémon."
    //     },
    //     {
    //         "id": 150,
    //         "name": "Mewtwo",
    //         "imageUrl": "Mewtwo.png",
    //         "types": [
    //             "Psychic"
    //         ],
    //         "description": "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments."
    //     }
    // ]
    
    //NO use- something about the code reaches to the end while executing
    // const contextJson = res.json(context);
    // res.locals.context = contextJson;

    // const contextJ = JSON.stringify(context);
    // res.locals.contextJ;

    // res.locals.context; Only this line will result in plain tbody
    
    
    res.render("admin");

});

module.exports = router;