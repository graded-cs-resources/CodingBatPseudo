function tableHeader() {
    var row = document.createElement("tr");
    row.innerHTML = `<th>Inputs</th>
                <th>Expected result</th>
                <th>Your result</th>
                <th colspan="2">Correct?</th>`;
    return row;
}

module.exports = tableHeader;