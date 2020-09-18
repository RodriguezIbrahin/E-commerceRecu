const Sequelize = require('sequelize');
const app = require('express').Router();
const { Products } = require('../db.js');

//buscar en db

app.get("/search" ,(req, res) => {

    let condicion;

    if(req.query.c === "new" || req.query.c === "used" ){condicion = [{ condition: req.query.c }]}
    else condicion = [{ condition: "new" },{ condition: "used" }];


    let orde;

    if(req.query.o){orde = [["price",  req.query.o ]];}
    else orde = null;

    let pagina;

    if(req.query.p){pagina = req.query.p * 30;}
    else pagina = 0;

    let buscar = "%"+ req.query.q + "%";
    
    Products.findAndCountAll({
        where:{
            title:{
                [Sequelize.Op.iLike] : buscar
            },
            [Sequelize.Op.or]: condicion
        },
        order: orde,
        offset: pagina,
        limit: 30,
    })
    .then((products) => {
		res.send(products);
	})
	.catch(err => { res.send(err) });
})

module.exports = app;