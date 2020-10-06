let deParam = require("./utility/deParam.js");
let _ = require("lodash");
let exercises = require("./exercisesToShowOnIndex.js");
require("./listeners/indexSaveLoadAll.js");

let title = deParam(window.location.search).title;
let allTitles = _.uniq(exercises.map(e => e.title));
let titles = title ? [title] : allTitles;

// display all problems
for (title of titles) {
  let outerDiv = document.getElementById('exerciseIndex');
  outerDiv.innerHTML += `<h3 class="probTitle" id="${title}">${title}</h3>`;

  let div = document.createElement("div");
  div.classList.add("problems");
  document.getElementById("exerciseIndex").appendChild(div);

  let x = exercises.filter((ex) => ex.title == title);

  x.forEach((ex) => {
    let sp = document.createElement("sp");
    sp.classList.add("exercise-link");
    sp.id = `${ex.name}`;
    sp.innerHTML = `<a href='exercise.html?name=${ex.name}&title=${ex.title}'>${ex.name}</a>&nbsp;`;
    div.appendChild(sp);
    sp.insertAdjacentHTML("afterend", "<br>");
    if (localStorage[ex.name] === "solved") {
      sp.insertAdjacentHTML('beforeend', '<span class="tick"><b>✓</b></span>');
    } else if (localStorage[ex.name] === "attempted") {
      sp.insertAdjacentHTML('beforeend', '<span class="wrong"><b>✖</b></span>')
    }
  });
}

