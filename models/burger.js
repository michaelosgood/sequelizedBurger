module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Post", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 250]
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
    return Burger;
};
