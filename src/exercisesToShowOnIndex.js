
let warmupExercises = require("./data/warmup.js");
//let stringExercises = require("./data/string.js");
let recursionExercises = require("./data/recursion.js");
let logicExercises = require("./data/logic.js");
let arrayExcercises = require("./data/array.js");
let apExcercises = require("./data/ap.js");
//let mapExercises = require("./data/map.js");

let mainPageExercises = [...warmupExercises, ...arrayExcercises,
...logicExercises,
...recursionExercises, ...apExcercises];

module.exports = mainPageExercises;