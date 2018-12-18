/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8";
var sname="とれーにんぐ進捗";

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = 53;//sheets.getLastRow()-1;
　var last_col = 16;sheets.getLastColumn()-2;
  
  
   var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var str='var BD=' + JSON.stringify(values);
  //var str= "var BD = [" +values + "]";
  
  return ContentService.createTextOutput(str).setMimeType(ContentService.MimeType.JAVASCRIPT);
    //JSON.stringify(sheet.getName());
}

function wmap_getSheetsName(sheets){
  //var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}