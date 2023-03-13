export interface  Book {
    id?: number;
    title: string;
    author: string;
    bookPublisher: string;
    bookDate: Date;
    bookState: boolean;
    ISBN: string;
    image?: string;
}