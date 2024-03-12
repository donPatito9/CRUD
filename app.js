const express = require('express');
const { CLIENT_MULTI_RESULTS } = require('mysql/lib/protocol/constants/client');
const conexion = require('./database/db');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));


app.use('/', require('./router'));

app.get('/login', (req, res)=>{
    res.render('login');
})


app.post('/auth', async(req, res)=>{
    const user = req.body.user;
    const password = req.body.password;
    if(user && password){
        conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
            if(results.length == 0 ) {
            res.send('Usuario Incorrecto');
            }else{
                res.render('index');
            }
        })
    }
} )

app.listen(5000, ()=>{
    console.log('Server corriendo http://localhost:5000');
});
