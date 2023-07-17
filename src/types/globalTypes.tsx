export interface IBook {
    _id?: number;
    email?: number | undefined
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    quantity?: string;
    reviews?: string[];
  }