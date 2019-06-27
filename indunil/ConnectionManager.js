module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunil"] = {
        host: process.env.EndPoint_rdsIndunil,
        port: process.env.Port_rdsIndunil,
        user: process.env.User_rdsIndunil,
        password: process.env.Password_rdsIndunil,
        database: "indunil"
    };
    this.dbConnections["indunil1"] = {
        host: process.env.EndPoint_rdsIndunil1,
        port: process.env.Port_rdsIndunil1,
        user: process.env.User_rdsIndunil1,
        password: process.env.Password_rdsIndunil1,
        database: "indunil1"
    };
};