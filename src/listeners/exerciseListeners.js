let _ = require("lodash");
let exercises = require("../exercisesToShowOnIndex");
let saveCodeFile = require("../io/saveCodeFile.js");
let loadCodeFile = require("../io/loadCodeFile.js");

module.exports = function (editor, exerciseName) {

    document.querySelector('#next').addEventListener('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) + 1;
        let x = exercises[indx];
        window.location.search = `?name=${x.name}&title=${x.title}`
    })

    document.querySelector('#previous').addEventListener('click', () => {
        let indx = _.findIndex(exercises, {
            name: exerciseName
        }) - 1;
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