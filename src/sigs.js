// let warmupSigs = require("./data/warmupSigs.js");
// let stringSigs = require("./data/stringSigs.js");
// let recursionSigs = require("./data/recursionSigs.js");
let logicSigs = require("./data/logicSigs.js");
let arraySigs = require("./data/arraySigs.js");
// let apSigs = require("./data/apSigs.js");
// let mapSigs = require("./data/mapSigs.js");
// let quizSigs = require("./data/quizSigs.js");
// let logicSigs = require("./data/logicSigs.js");
// this ES2018 spread syntax was causing browserify problems, so I replaced it below...
// let sigs = {...warmupSigs, ...stringSigs };

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object. 
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
let sigs = Object.assign({}, 
    // warmupSigs, 
    // stringSigs,
    // recursionSigs,
    logicSigs,
    arraySigs,
    // apSigs,
    // mapSigs,
    // quizSigs
    );

module.exports = sigs;