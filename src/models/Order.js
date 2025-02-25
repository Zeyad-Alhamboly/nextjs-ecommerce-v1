import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from '../lib/db'

const Order = sequelize.define('Order',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
            defaultValue: 'pending'
        }
    },
    { timestamps: true }
)

export default Order



