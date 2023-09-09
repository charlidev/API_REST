const dbocategoria = require('./dbcategoria');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.route('/categoria').get((request,response)=>{
    dbocategoria.getCategoria().then(result => {
        response.json(result[0]);
    })
});

var port = process.env.PORT || 1433;
app.listen(port);
console.log('Categoria API iniciado en el puerto: '+ port);