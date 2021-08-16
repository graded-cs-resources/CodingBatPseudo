const Collection = require("./collections")
const Queue = require("./queues")
const Stack = require("./stacks")
/** Return row for html table **/
function formatResults(input, inputStr, idealResult, result, idealOutput, output) {
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = (idealResult === result);
    // remove parens from inputStr if it is a single thing
    if (input.length == 1) {
        inputStr= inputStr.slice(1, inputStr.length-1);
    }
    var row = document.createElement("tr");
    row.innerHTML = `<td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${result}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>`;
    return row;
}

module.exports = formatResults;