
let warmupExercises = require("./data/warmup.js");
//let stringExercises = require("./data/string.js");
let recursionExercises = require("./data/recursion.js");
let logicExercises = require("./data/logic.js");
let arrayExercises = require("./data/array.js");
let apExercises = require("./data/ap.js");
let collectionsExercises = require("./data/collections.js");
//let mapExercises = require("./data/map.js");
let advExercises = require("./data/advancedDataStructures.js")

let mainPageExercises = [...warmupExercises, ...arrayExercises,
...collectionsExercises, ...advExercises, ...logicExercises,
...recursionExercises, ...apExercises];

module.exports = mainPageExercises;