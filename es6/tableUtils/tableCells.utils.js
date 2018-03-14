

function addUpdateTableCells(dataMap, row ) {
  [
    "name",
    "bestBid",
    "bestAsk",
    "openBid",
    "openAsk",
    "lastChangeAsk",
    "lastChangeBid"
  ].map(function(keyValue, index) {
    if (row.cells[index]) {
      row.deleteCell(index);
    }
    var cell = row.insertCell(index);

    cell.innerHTML =
      index === 0 ? dataMap[keyValue] : Number(dataMap[keyValue]).toFixed(2);
  });

}

module.exports = {
  addUpdateTableCells : addUpdateTableCells
}
