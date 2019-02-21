const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');


async function initialize() {

//  const pool = await oracledb.createPool(dbConfig.CISEPool);

oracledb.getConnection(
  {
    user          :     process.env.CISE_USER,
    password      :     process.env.CISE_PASSWORD,
    connectString :     process.env.CISE_CONNECTIONSTRING
  })

  console.log("Oracle DB Connected~!!!");

}

module.exports.initialize = initialize;
