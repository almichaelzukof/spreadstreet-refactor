// Use ES6/7 code
const onOpen = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Custom scripts')
      .addItem('Edit sheets [sample React project]', 'openDialog')
      .addSeparator()
      .addItem('Open sidebar', 'showSidebar')
      .addToUi();
};

const showSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
      .setTitle('My custom sidebar')
      .setWidth(300);
  SpreadsheetApp.getUi()
      .showSidebar(html);
};

const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
      .setWidth(400)
      .setHeight(600);
  SpreadsheetApp
      .getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Sheet Editor');
};

const getSheets = () => SpreadsheetApp
    .getActive()
    .getSheets();

const getActiveSheetName = () => SpreadsheetApp
    .getActive()
    .getSheetName();

const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const sheetName = sheet.getName();
    return {
      text: sheetName,
      sheetIndex: index,
      isActive: sheetName === activeSheetName,
    };
  });
};

const addSheet = (sheetTitle) => {
  SpreadsheetApp
      .getActive()
      .insertSheet(sheetTitle);
  return getSheetsData();
};

const deleteSheet = (sheetIndex) => {
  const sheets = getSheets();
  SpreadsheetApp
      .getActive()
      .deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

const setActiveSheet = (sheetName) => {
  SpreadsheetApp
      .getActive()
      .getSheetByName(sheetName)
      .activate();
  return getSheetsData();
};

const setData = (data) => {
  console.log('parsed data is ', data);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = SpreadsheetApp.getActiveSheet();
  const activeCell = ss.getActiveCell();

  const row = activeCell.getRow();
  const col = activeCell.getColumn();

  const lastRow = data.length;
  const lastCol = data[0].length;

  const newRange = sheet.getRange(row, col, lastRow, lastCol);

  newRange.setValues(data);
};

export {
  onOpen,
  showSidebar,
  openDialog,
  getSheetsData,
  addSheet,
  deleteSheet,
  setActiveSheet,
  setData,
};
