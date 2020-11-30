const Collection = require("./collections")
const Queue = require("./queues")
const Stack = require("./stacks")
/** Return row for html table **/
function formatResults(input, idealResult, result, idealOutput, output) {
    var inputStr = "";
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = (idealResult === result);
    if (input instanceof Collection ||
        input instanceof Stack ||
        input instanceof Queue) {
        inputStr = input.toString();
    } else {

        inputStr = inputStr.replaceAll(",", ", ");
        inputStr = inputStr.replaceAll("], [", "], \n [");
        inputStr = inputStr.substring(1, inputStr.length - 1);
    }
    inputStr = inputStr.replaceAll("true", "TRUE");
    inputStr = inputStr.replaceAll("false", "FALSE");
    var row = document.createElement("tr");
    row.innerHTML = `<td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${result}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>`;
    return row;
}

module.exports = formatResults;