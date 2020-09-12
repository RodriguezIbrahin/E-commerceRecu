const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    const Products = sequelize.define('products', {
        title:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL, 
            allowNull: false
        },
        currency_id:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        available_quantity:{
            type: DataTypes.DECIMAL, 
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