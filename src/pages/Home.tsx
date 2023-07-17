import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useGetLimitBooksQuery } from "../redux/features/book/bookApi";
import { addToWishList } from "../redux/features/wishList/wishList.Slice";
import { useAppDispatch } from "../redux/hook";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetLimitBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="w-[100%] mx-auto">
        <div className="w-16 h-16 text-center border-4 border-dashed rounded-full animate-spin text-red-700"></div>
      </div>
    );
  }

  const handleWishList = (data: IBook) => {
    console.log(data);
    dispatch(addToWishList(data));
  };

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {data?.data?.map((book: IBook) => (
          <div key={book._id} className="card border shadow my-5">
            <figure>
              <img
                className="h-[150px] w-full"
                src="https://i.ibb.co/qY9yDqy/imgbin-mississauga-library-system-school-library-public-library-online-public-access-catalog-library.png"
                alt="book"
              />
            </figure>

            <div className="p-2">
              <h2 className="card-title">Title : {book.title}</h2>
              <small>
                <p>Author : {book.author}</p>
              </small>
              <small>
                <p>Genre : {book.genre} </p>
              </small>
              <small>
                <p>PublicationDate : {book.publicationDate}</p>
              </small>

              <div className="card-actions justify-end">
                <div
                  className="badge badge-outline cursor-pointer"
                  onClick={() => handleWishList(book)}
                >
                  WishList
                </div>
                <div className="badge badge-outline">
                  <Link to={`/book-details/${book._id}`}> Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
