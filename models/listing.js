module.exports = function (sequelize, DataTypes) {
  var listing = sequelize.define("listing", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    craft: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    sex: DataTypes.STRING,
    img: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    available: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return listing;
};
