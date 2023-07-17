/* eslint-disable react-hooks/rules-of-hooks */
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";
import { removeFromWishList } from "../redux/features/wishList/wishList.Slice";


export default function WishList() {
  const dispatch = useAppDispatch()
  const { wishList } = useAppSelector((state) => state.wish);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {wishList?.map((book: IBook) => (
          <div key={book._id} className="card border  shadow my-5">
            <figure>
              <img
                className="h-[150px] w-full"
                src="https://img.freepik.com/free-psd/soft-cover-book-mockup-scene_358694-4823.jpg?w=740&t=st=1689441169~exp=1689441769~hmac=51dfcfacda0a0e2a86d7b2ad2091c3a3c301188c627116481ec15a9118c71dec"
                alt="book"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">Title : {book.title}</h2>
              <p>Author : {book.author}</p>
              <p>Genre : {book.genre}</p>
              <p>PublicationDate : {book.publicationDate}</p>
            </div>
            <div className="card-actions justify-end">
                <div
                  className="badge badge-outline  cursor-pointer"
                  onClick={() => dispatch(removeFromWishList(book))}
                >
                  <MdDelete className="text-2xl p-1"/>
                </div>
      
              </div>
          </div>
        ))}
      </div>
    </>
  );
}
