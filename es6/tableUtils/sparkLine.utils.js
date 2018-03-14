export function createSparkLineCell(currencyName, Row, midPricesList) {
  var sparkSpan = document.getElementById("Spark-" + currencyName);
  if (!sparkSpan) {
    var sparkCell = Row.insertCell(Row.length);
    var sparkSpan = document.createElement("SPAN");
    sparkSpan.id = "Spark-" + currencyName;
    sparkCell.appendChild(sparkSpan);
  }
  Sparkline.draw(sparkSpan, midPricesList.slice(-30));
}
