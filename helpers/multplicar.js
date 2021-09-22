const fs = require('fs');

const colors = require('colors');
 

const crearArchivo = async (num = 10, listar = false, hasta = 10) => {
    
    try {
      
        let salida  = '';
        let consola = '';
        
        if(hasta){

            for (let i = 0; i <= hasta; i++) {
                salida  += `${num} X ${i} = ${ num * i}\n`;
                consola += colors.bgWhite.black((`${colors.blue(num)} X ${i} = ${colors.green(num * i)}\n`));
            }            

        } else {
            
            for (let i = 0; i <= 10; i++) {
                salida += `${(num)} X ${i} = ${(num * i)}\n`;
                consola += colors.bgWhite.black((`${colors.blue(num)} X ${i} = ${colors.green(num * i)}\n`));
            }

        }

        if(listar){
      
            console.log('========================='.red);
            console.log(`*** Tabla del ${colors.blue(num)} *** `);
            console.log('========================='.red);
            
            console.log(consola);
        }    
    
        fs.writeFileSync(`./outputs/tabla-${num}.txt`, salida);
        return `Archivo tabla del ${num}`;
        
    } catch (error) {
        
        throw error;
        
    }
    
}

module.exports = {
    crearArchivo
}