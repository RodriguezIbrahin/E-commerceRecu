const app = require('express').Router();
const { Products } = require('../db.js');


 // retorno todos los productos
app.get('/', (req, res) => {
	Products.findAll()
	.then((products) => {
		res.send(products);
	})
	.catch(err => { res.send(err) });
});

// retorno un producto segun id

app.get('/:id', (req, res) => {
	Products.findOne({
        where: { id: req.params.id}
    })
	.then((ress) => {
        if (!ress) { return res.status(404).end(); }
	    return res.json(ress)
	})
	.catch(err => { res.send(err) });
});

// crea un producto

app.post('/', (req, res) => {
	Products.create(req.body)
    .then(ress => {
        return res.status(201).send(ress);
    })
    .catch(err => {  res.send(err) }); 
});


module.exports = app;