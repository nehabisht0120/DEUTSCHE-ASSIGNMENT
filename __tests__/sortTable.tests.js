// This is test file for row utils

"use strict";

const tableUtils = require("../es6/tableUtils/sortTable");

const mockedData =
  "<tbody>" +
  "<tr>" +
  "<th>name</th>" +
  "<th>bestBid</th>" +
  "<th>bestAsk</th>" +
  "<th>openBid</th>" +
  "<th>openAsk</th>" +
  `<th>lastChangeAsk</th>` +
  `<th>lastChangeBid</th>` +
  `<th>SparkLines</th>` +
  "</tr>" +
  '<tr id="gbpeur">' +
  "<td>gbpeur</td>" +
  "<td>1.28</td>" +
  "<td>1.33</td>" +
  "<td>1.27</td>" +
  "<td>1.30</td>" +
  "<td>0.02</td>" +
  "<td>0.02</td>" +
  "</tr>" +
  '<tr id="eusqw">' +
  "<td>eusqw</td>" +
  "<td>1.28</td>" +
  "<td>1.33</td>" +
  "<td>1.27</td>" +
  "<td>1.30</td>" +
  "<td>0.02</td>" +
  "<td>-0.01</td>" +
  "</tr>" +
  '<tr id="blahblah">' +
  "<td>blahblah</td>" +
  "<td>1.28</td>" +
  "<td>1.33</td>" +
  "<td>1.27</td>" +
  "<td>1.30</td>" +
  "<td>0.02</td>" +
  "<td>-0.01</td>" +
  "</tr>" +
  "</tbody>"; 


document.body.innerHTML = '<table id="stomp-table">' + mockedData +   "</table>";

test("it should sort the table with minimum absolute value", () => {
  // Set up our document body

  tableUtils.sortTable("stomp-table", 6);
  expect(document.getElementById("stomp-table").innerHTML).toMatchSnapshot();
});



