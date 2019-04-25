import * as publicFunctions from './sheets-utilities.js';

// Expose public functions
global.onOpen = publicFunctions.onOpen;
global.showSidebar = publicFunctions.showSidebar;
global.openDialog = publicFunctions.openDialog;
global.getSheetsData = publicFunctions.getSheetsData;
global.addSheet = publicFunctions.addSheet;
global.deleteSheet = publicFunctions.deleteSheet;
global.setActiveSheet = publicFunctions.setActiveSheet;
global.setData = publicFunctions.setData;
