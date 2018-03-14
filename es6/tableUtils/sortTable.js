

function sortTable(tableId , sortByColIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tableId);
  var cellsCount = table.rows[0].cells.length;
  switching =  true ;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[sortByColIndex];
      y = rows[i + 1].getElementsByTagName("TD")[sortByColIndex];

      if (Math.abs(x.innerHTML) > Math.abs(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

module.exports = {
  sortTable :sortTable
}
