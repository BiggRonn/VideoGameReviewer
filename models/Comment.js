const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { User, Review } = require(".");
//Creating models
class Comment extends Model {}
//initiating comment data by id
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "review",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
