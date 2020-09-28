let _ = require("lodash");

/** Return row for html table **/
function formatResults(funcName, inputStr, idealResult, result, idealOutput, output) {
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = _.isEqual(idealResult, result);
    // Format the string to have no parents if a single input, and use capitalized true/false
    if (inputStr.indexOf(",") === -1) {
        inputStr = inputStr.slice(1, -1);
    }
    inputStr = inputStr.replaceAll("true", "TRUE");
    inputStr = inputStr.replaceAll("false", "FALSE");
    return `<tr>
            <td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${result}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>
        </tr>`;
}

module.exports = formatResults;