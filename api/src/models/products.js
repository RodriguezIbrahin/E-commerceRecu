const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    const Producto = sequelize.define('product', {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        price:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
}