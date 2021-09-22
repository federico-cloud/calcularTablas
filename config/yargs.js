const argv = require('yargs')
    .option('b', {
        alias: 'num',
        type: 'number',
        describe: 'Es el valor del multiplicando',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Imprime en pantalla el resultado',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'numbre',
        describe: 'Es el valor del multplicador',
        default: 10
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;  