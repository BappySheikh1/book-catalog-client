import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useGetLimitBooksQuery } from "../redux/features/book/bookApi";

export default function Home() {
  
  const { data, isLoading } = useGetLimitBooksQuery(undefined);

  if (isLoading) {
    return (
      <div className="w-[100%] mx-auto">
        <div className="w-16 h-16 text-center border-4 border-dashed rounded-full animate-spin text-red-700"></div>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {data?.data?.map((book: IBook) => (
          <div className="card border shadow my-5">
            <figure>
              <img
                className="h-[150px] w-full"
                src="https://img.freepik.com/free-psd/soft-cover-book-mockup-scene_358694-4823.jpg?w=740&t=st=1689441169~exp=1689441769~hmac=51dfcfacda0a0e2a86d7b2ad2091c3a3c301188c627116481ec15a9118c71dec"
                alt="book"
              />
            </figure>
            <Link to={`/book-details/${book._id}`}>
              <div className="card-body">
                <h2 className="card-title">Title : {book.title}</h2>
                <p>Author : {book.author}</p>
                <p>Genre : {book.genre}</p>
                <p>PublicationDate : {book.publicationDate}</p>

                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {book.publicationDate}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
