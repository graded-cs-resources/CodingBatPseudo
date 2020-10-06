
let saveAllSolutionsToFile = require("../io/saveAllSolutionsToFile.js");
let loadAllSolutionsFromFile = require("../io/loadAllSolutionsFromFile.js");


document.querySelector('#saveAll').addEventListener('click', () => {
    saveAllSolutionsToFile();
})

document.querySelector('#loadAll').addEventListener('click', () => {
    loadAllSolutionsFromFile();
})