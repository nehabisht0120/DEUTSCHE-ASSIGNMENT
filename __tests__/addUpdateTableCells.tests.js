// this is test fole for tableCells.utils.js;

"use strict";

const tableUtils = require("../es6/tableUtils/tableCells.utils");
const rowUtils = require("../es6/tableUtils/tableRow.utils");

document.body.innerHTML =
  '<table id="stomp-table">' +
  "<tr>" +
  "<th>name</th>" +
  "<th>bestBid</th>" +
  "<th>bestAsk</th>" +
  "<th>openBid</th>" +
  "<th>openAsk</th>" +
  "<th>lastChangeAsk</th>" +
  "<th>lastChangeBid</th>" +
  "<th>SparkLines</th>" +
  "</tr>" +
  " </table>";

const mockedData = {
  name: "gbpeur",
  bestAsk: 1.3322889082436173,
  bestBid: 1.2810153021023876,
  lastChangeAsk: 0.020660545136841346,
  lastChangeBid: 0.009876039365910305,
  openAsk: 1.3030843400530694,
  openBid: 1.2729156599469307
};

const dataArr1 = [mockedData, mockedData];
const dataArr2 = [
  {
    name: "gbpeur",
    bestAsk: 1.3322889082436173,
    bestBid: 1.2810153021023876,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    openAsk: 1.3030843400530694,
    openBid: 1.2729156599469307
  },
  {
    name: "euswq",
    bestAsk: 1,
    bestBid: 1,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    openAsk: 1.3030843400530694,
    openBid: 1
  },
  {
    name: "euswq",
    bestAsk: 2,
    bestBid: 3,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    openAsk: 1.3030843400530694,
    openBid: 4
  }
];

test("it should fill  coloumns value with for every unique stomp update", () => {
  // Set up our document body
  var row = rowUtils.InsertRow(mockedData, "stomp-table");
  tableUtils.addUpdateTableCells(mockedData, row);
  expect(row.innerHTML).toMatchSnapshot();
});

test("it should fill coloumns in correct row of the table", () => {
  var row = rowUtils.InsertRow(mockedData, "stomp-table");
  tableUtils.addUpdateTableCells(mockedData, row);
  expect(row.innerHTML).toMatchSnapshot();
  expect(row.id).toEqual(mockedData.name);
});

test("it should fill the coloumns in row with the latest updates", () => {
  
  //snapshot testing should fail in case you add another obj in dataArr2
  
  dataArr2.map(data => {
    var row = rowUtils.InsertRow(data, "stomp-table");
    tableUtils.addUpdateTableCells(data, row);
  });
  expect(document.getElementById("stomp-table")).toMatchSnapshot();
});
