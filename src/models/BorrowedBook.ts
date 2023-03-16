import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/dbConfig';
import { BorrowedBook } from '../interfaces/borrowed-book.interface';
import { BookModel } from './Book';
import { ClientModel } from './Client';

export const BorrowedBookModel = sequelize.define<Model<BorrowedBook, BorrowedBook>>('borrowed_books', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ClientModel,
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: BookModel,
      key: 'id',
    },
  },
  borrowDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Date.now()
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  returnStatus: {
    type: DataTypes.ENUM('pending', 'returned'),
    defaultValue: 'pending',
  },
});

// Relaciones
ClientModel.hasMany(BorrowedBookModel, { foreignKey: 'userId', as: 'borrowedBooks' });
BorrowedBookModel.belongsTo(ClientModel, { foreignKey: 'userId', as: 'user' });

BookModel.hasMany(BorrowedBookModel, { foreignKey: 'bookId', as: 'loans' });
BorrowedBookModel.belongsTo(BookModel, { foreignKey: 'bookId', as: 'book' });

