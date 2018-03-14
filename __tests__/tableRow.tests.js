// This is test file for row utils


"use strict";

const tableUtils = require("../es6/tableUtils/tableRow.utils");

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
  bestAsk: 1.3322889082436173,
  bestBid: 1.2810153021023876,
  lastChangeAsk: 0.020660545136841346,
  lastChangeBid: 0.009876039365910305,
  name: "gbpeur",
  openAsk: 1.3030843400530694,
  openBid: 1.2729156599469307
};

const dataArr1 = [mockedData , mockedData];
const dataArr2 = [
  {
    bestAsk: 1.3322889082436173,
    bestBid: 1.2810153021023876,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    name: "gbpeur",
    openAsk: 1.3030843400530694,
    openBid: 1.2729156599469307
  },
  {
    bestAsk: 1,
    bestBid: 1,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    name: "euswq",
    openAsk: 1.3030843400530694,
    openBid: 1
  },
  ,
  {
    bestAsk: 1,
    bestBid: 1,
    lastChangeAsk: 0.020660545136841346,
    lastChangeBid: 0.009876039365910305,
    name: "euswq",
    openAsk: 1.3030843400530694,
    openBid: 1
  }
];

test("it should add a new row with currency name as id in table with every unique stomp update", () => {
  // Set up our document body
  tableUtils.InsertRow(mockedData,"stomp-table");
  expect(document.getElementById("stomp-table").innerHTML).toMatchSnapshot();
});

test("it should not add a new row  in table if new stomp data name is same as previous updates received", () => {
  dataArr1.map(data => tableUtils.InsertRow(data,"stomp-table"));
  expect(document.getElementById("stomp-table").innerHTML).toEqual(
    '<tbody><tr><th>name</th><th>bestBid</th><th>bestAsk</th><th>openBid</th><th>openAsk</th><th>lastChangeAsk</th><th>lastChangeBid</th><th>SparkLines</th></tr> <tr id="gbpeur"></tr></tbody>'
  );
});

test("it should add as many rows as unique named currency updates", () => {
  let projectedDom = "";
  dataArr2.map(data => {tableUtils.InsertRow(data,"stomp-table");});
  expect(document.getElementById("stomp-table").innerHTML).toEqual('<tbody><tr><th>name</th><th>bestBid</th><th>bestAsk</th><th>openBid</th><th>openAsk</th><th>lastChangeAsk</th><th>lastChangeBid</th><th>SparkLines</th></tr> <tr id="gbpeur"></tr><tr id="euswq"></tr></tbody>');
});
