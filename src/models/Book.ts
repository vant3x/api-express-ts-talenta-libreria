import { DataTypes, InferCreationAttributes, Model } from "sequelize"; 
import { sequelize } from "./../config/dbConfig"; 
import { Book } from "./../interfaces/book.interface";


export const BookModel  = sequelize.define<Model<Book, Book>>('books', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookPublisher: {
      type: DataTypes.STRING 
    },
    bookDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date().getFullYear().toString()
    },
    bookState: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    ISBN: {
      type: DataTypes.STRING,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
}, {
  timestamps: true
});

