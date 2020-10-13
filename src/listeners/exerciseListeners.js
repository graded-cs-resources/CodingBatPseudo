let exercises = require("../exercisesToShowOnIndex");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

function findIndex(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return i;
        }
    }
    return i;
}

module.exports = function (editor, exerciseName) {

    document.querySelector('#next').addEventListener('click', () => {
        let indx = findIndex(exercises, exerciseName) + 1;
        if (indx >= exercises.length) indx = exercises.length - 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#previous').addEventListener('click', () => {
        let indx = findIndex(exercises, exerciseName) - 1;
        if (indx < 0) indx = 0;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#save').addEventListener('click', () => {
        saveCodeFile(editor, exerciseName);
    })

    document.querySelector('#open').addEventListener('click', () => {
        loadCodeFile(editor);
    })

};