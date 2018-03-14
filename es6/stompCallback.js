var CurrencyMidPricesMap = {};

import _ from "lodash";
import { sortTable } from "./tableUtils/sortTable";
import { addUpdateTableCells } from "./tableUtils/tableCells.utils";
import { createSparkLineCell } from "./tableUtils/sparkLine.utils";
import { InsertRow } from "./tableUtils/tableRow.utils";

function callback(message) {
  // called when the client receives a STOMP message from the server
  var messageData = {};
  if (message.body) {
    var messageData = JSON.parse(message.body);
    !_.isEmpty(messageData) && AddUpdateTable(messageData);
  } else {
    alert("got empty message");
  }
  return messageData;
}

function AddUpdateTable(messageData) {
  const currencyPairObj = messageData;
  const { name } = currencyPairObj;

  updateMidPrice(currencyPairObj);
  var currencyRow = InsertRow(currencyPairObj, "stomp-table");
  addUpdateTableCells(currencyPairObj, currencyRow);
  createSparkLineCell(name, currencyRow, CurrencyMidPricesMap[name]);
  sortTable("stomp-table", 6);
}

function updateMidPrice(currencyPairObj) {
  const { name, bestBid, bestAsk } = currencyPairObj;

  CurrencyMidPricesMap[name]
    ? CurrencyMidPricesMap[name].push((bestBid + bestAsk) / 2)
    : (CurrencyMidPricesMap[name] = [(bestBid + bestAsk) / 2]);

  return CurrencyMidPricesMap;
}

module.exports = {
  callback: callback
};
