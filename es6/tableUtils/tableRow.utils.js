function InsertRow(currencyPairObj, tableId) {
  const { name } = currencyPairObj;

  var table = document.getElementById(tableId);
  var currencyRow = document.getElementById(name);
  if (!currencyRow) {
    currencyRow = table.insertRow(table.length);
    currencyRow.id = name;
  }
  return currencyRow;
}

module.exports = {
  InsertRow: InsertRow
};
