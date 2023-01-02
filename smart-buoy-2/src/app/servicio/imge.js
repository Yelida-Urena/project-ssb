const glob = require('glob');

$carpeta = '1001-1'

options = {
  cwd: '../../../../assets/GoogleDrive/' + $carpeta,
},

$fecha = "2022-12-26"

forFiles = (err,files) => console.log(files);

glob($fecha + '*', options, forFiles);

console.log(process.cwd());
