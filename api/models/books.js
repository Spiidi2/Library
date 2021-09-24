module.exports = (sequelize, type) => {
    return sequelize.define("books", {
      id: {
         type: type.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
      },       
      title: {
          type: type.STRING,

          allowNull: false,
       },
       author: {
          type: type.STRING,
          allowNull: true,
       },
       description: {
        type: type.STRING,
        allowNull: true,
     },
    });
 };
 