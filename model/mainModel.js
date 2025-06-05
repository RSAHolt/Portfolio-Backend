import { pool } from "../config/config.js";

//The database name is 'sql8783057'

//Get table from database
const getVisitors = async () => {
    let [data] = await pool.query("SELECT* FROM `sql8783057`.`visitors`")
    return data
};

//Get visitors by ip
const getVisitorIp = async (ip) => {
    let [data] = await pool.query("SELECT * FROM `sql8783057`.`visitors` WHERE `sql8783057`.`visitors`.`ip` = ?",[ip])
    return data
};

//Get visitors by timestamp
const getVisitorTimestamp = async (timestamp) => {
    let [data] = await pool.query("SELECT * FROM `sql8783057`.`visitors` WHERE `sql8783057`.`visitors`.`timestamp` = ?",[timestamp])
    return data
};

//Add a visitor
const insertVisitor = async (ip) => {
    await pool.query("INSERT INTO `sql8783057`.`visitors` (ip) VALUES (?)",[ip])
};

export {getVisitors,getVisitorIp,getVisitorTimestamp,insertVisitor}