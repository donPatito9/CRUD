const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '112233',
    database: 'crud'
});

conexion.connect((error)=>{
    if(error){
        console.error('EL tipo de error es: '+error);
        return
    }
    console.log('¡Bien todo Funcionando Super!!!');
})

module.exports = conexion;