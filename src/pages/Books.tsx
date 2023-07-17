import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { addToWishList } from "../redux/features/wishList/wishList.Slice";
import { useAppDispatch } from "../redux/hook";
import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";

export default function Books() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetBooksQuery(undefined);
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleWishList = (data: IBook) => {
    console.log(data);
    dispatch(addToWishList(data));
  };

  return (
    <>
      <header className="mx-auto">
        <div className="navbar ">
          <form onClick={handleSearch} className="flex-none gap-2">
            <div className="form-control">
              <input
                type="genre"
                placeholder="Filtering Genre"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="form-control">
              <input
                type="year"
                placeholder="Filtering publication Year"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="form-control">
              <input
                type="search"
                placeholder="Search books"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="form-control">
              <input
                type="button"
                value="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </form>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {data?.data?.map((book: IBook) => (
          <div key={book._id} className="card border shadow ">
            <figure>
              <img
                className="h-[150px] w-full "
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
