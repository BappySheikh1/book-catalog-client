/* eslint-disable react-hooks/rules-of-hooks */

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";
import { addToReadBook } from "../redux/features/wishList/wishList.Slice";

export default function WishList() {
  const dispatch = useAppDispatch();
  const { wishList } = useAppSelector((state) => state.wish);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {wishList?.map((book: IBook) => (
          <div key={book._id} className="card border  shadow my-5">
            <figure>
              <img
                className="h-[150px] w-full"
                src="https://i.ibb.co/qY9yDqy/imgbin-mississauga-library-system-school-library-public-library-online-public-access-catalog-library.png"
                alt="book"
              />
            </figure>

            <div className=" p-2">
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
            </div>
            <div className="card-actions justify-end">
              <div
                className="badge badge-outline  cursor-pointer"
                onClick={() => dispatch(addToReadBook(book))}
              >
                Add To ReadBook
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
