var express = require('express');

var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res){
	res.send('Inicio Express');
}

function c_clientes(req, res){
	res.send('<!DOCTYPE html><html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"><div class="container"><h1>Lista de clientes</h1><table class="table table-striped"><thead><tr><th scope="col">Codigo</th><th scope="col">Nombre</th><th scope="col">Apellido</th><th scope="col">Numero</th></tr></thead><tbody><tr><th scope="row">1</th><td>Brighit</td><td>Ricaldi</td><td>972779130</td></tr><tr><th scope="row">2</th><td>Ana</td><td>Quispe</td><td>987456123</td></tr><tr><th scope="row">3</th><td>Percy</td><td>Ricaldi</td><td>987570589</td></tr></tbody></table></div></head><body></body></html>');
}

function c_productos(req, res){
	res.send ('<!DOCTYPE html><html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"><div class="container"><h1>Lista de productos</h1><table class="table table-striped"><thead><tr><th scope="col">Codigo</th><th scope="col">Nombre</th><th scope="col">Precio</th><th scope="col">Stock</th></tr></thead><tbody><tr><th scope="row">1</th><td>Laptop</td><td>S/3400</td><td>3 unidades</td></tr><tr><th scope="row">2</th><td>Celular</td><td>S/900</td><td>10 unidades</td></tr><tr><th scope="row">3</th><td>Television</td><td>S/1800</td><td>4 unidades</td></tr></tbody></table></div></head><body></body></html>');
}

function c_server(){
	var host=server.address().address;
	port = server.address().port;
	console.log(host + ' : ' + port);
}

var server = app.listen(9000, c_server);