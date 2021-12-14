const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// TODO import bcrypt
class User extends Model {
    //TODO check password
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
    },
    // TODO add hooks foo password hash
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
);

module.exports = User;