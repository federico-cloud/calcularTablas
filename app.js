const { crearArchivo } = require('./helpers/multplicar');
const argv = require('./config/yargs');

const colors = require('colors');

console.clear();

/* const [ , , arg3 = 'num=1' ] = process.argv;
const [ , num = 1] = arg3.split('='); */
 
crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg, colors.green('Creado con exito')))
    .catch( error => console.error(error));
