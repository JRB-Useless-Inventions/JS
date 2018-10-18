const convertExcel = require('excel-as-json').processFile;

  var file = "Book1.xlsx"
  var options = {
    sheet: file,
    isColOriented: false,
    omitEmtpyFields: true
  }
 
convertExcel(file, "output.json", options, function(err, data){

  if (err) {
    console.log(err);
  }
   if (data) {
    console.log(data);
  }
  
});