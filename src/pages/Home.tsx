import { useEffect, useState } from "react";
import { IBook } from "../types/globalTypes";

export default function Home() {
  const [bookState, setBookState] = useState<IBook[]>([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBookState(data));
  }, []);
 
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
    {
      bookState?.map(book=><div className="card border shadow ">
      <figure><img src="https://img.freepik.com/free-psd/soft-cover-book-mockup-scene_358694-4823.jpg?w=740&t=st=1689441169~exp=1689441769~hmac=51dfcfacda0a0e2a86d7b2ad2091c3a3c301188c627116481ec15a9118c71dec" alt="book" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title}
          
        </h2>
        <p>{book.author}</p>
       
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{book.publicationDate}</div>
        </div>
      </div>
    </div>)
     }
    </div>
     
    </>
  );
}
