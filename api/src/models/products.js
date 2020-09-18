const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    const Products = sequelize.define('products', {
        id: { type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true 
        },
        title:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        price:{
            type: DataTypes.REAL, 
            allowNull: false
        },
        currency_id:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        available_quantity:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        thumbnail:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        condition:{
            type: DataTypes.STRING, 
            allowNull: false
        }
    })
}