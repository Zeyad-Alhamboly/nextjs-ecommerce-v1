import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db";

const Product = sequelize.define('Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        imgUrl: {
            type: DataTypes.STRING,
        }
    },

    { timestamps: true }
);

export default Product