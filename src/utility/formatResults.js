
/** Return row for html table **/
function formatResults(funcName, inputStr, idealResult, result, idealOutput, output) {
    if (idealOutput !== "") {
        result = output;
        idealResult = idealOutput;
    }
    const ok = (idealResult === result);
    // Format the string to have no parents if a single input, and use capitalized true/false
    if (inputStr.indexOf(",") === -1 || inputStr.substring(1, 2) == "[") {
        inputStr = inputStr.slice(1, -1);
    }
    inputStr = inputStr.replaceAll("true", "TRUE");
    inputStr = inputStr.replaceAll("false", "FALSE");
    var row = document.createElement("tr");
    row.innerHTML = `<td>${inputStr}</td>
            <td>${idealResult}</td>
            <td>${JSON.stringify(result)}</td>
            <td>${ok ? '✔' : '✖'}</td>
            <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>`;
    return row;
}

module.exports = formatResults;