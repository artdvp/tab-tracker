module.exports = (sequelize, DataTyps) =>
    sequelize.define('User', {
        email: {
          type: DataTyps.STRING,
          unique: true
        },
        password: Datatype.STRING
    })