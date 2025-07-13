import type { RowID, RowElement } from "../js/interface";
import * as CRUD from "../js/crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);

const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
