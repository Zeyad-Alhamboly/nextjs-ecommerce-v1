import Order from "@/models/Order";
import OrderItem from "@/models/OrderItem";
import Product from "@/models/Product";
import User from "@/models/User";
import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: "",
    database: process.env.DB_NAME,
    // TYPE THIS LINE TO FIX PROBLEM : Error: Please install mysql2 package manually
    dialectModule: mysql2
})

// DEFINE RELATIONS
User.hasMany(Order, { foreignKey: 'user_id' })
Order.belongsTo(User, { foreignKey: 'user_id' })

Order.hasMany(OrderItem, { foreignKey: "order_id" })
OrderItem.belongsTo(Order, { foreignKey: "order_id" })

Product.hasMany(OrderItem, { foreignKey: "product_id" })
OrderItem.belongsTo(Product, { foreignKey: "product_id" })



async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("DB CONNECTED!")
        await sequelize.sync({ force: true });
        console.log("DB SYNCED")
    } catch (error) {
        console.log("ERRO WHILE CONNECTING DB:", error)
        throw new Error("Database Connection Failed")
    }
}

export { sequelize, connectDB, User, Product, Order, OrderItem }
