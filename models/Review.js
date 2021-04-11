const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//Creating Review model
class Review extends Model {}
//initiating review data
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    game_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    platform: {
      type: DataTypes.TEXT,

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
