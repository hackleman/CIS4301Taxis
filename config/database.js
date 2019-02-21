module.exports = {
  CISEPool: {
    user: process.env.CISE_USER,
    password: process.env.CISE_PASSWORD,
    connectString: process.env.CISE_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
