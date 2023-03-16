import { DataTypes, InferCreationAttributes, Model } from "sequelize"; 
import { sequelize } from "./../config/dbConfig"; 
import { BookCopies } from "./../interfaces/book-copies.interface";
import { BookModel } from "./Book";

export const BookCopiesModel  = sequelize.define<Model<BookCopies, BookCopies>>('books_copies', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idBook: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
}, {
  timestamps: true
});

BookCopiesModel.belongsTo(BookModel, { foreignKey: 'idBook', as: 'book' });
