export interface BorrowedBook {
    id?: number;
    userId: number;
    bookId: number;
    borrowDate: Date;
    returnDate: Date;
    returnStatus: 'pending' | 'returned';
  }