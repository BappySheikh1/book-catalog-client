import { Link, useParams } from "react-router-dom";
import BookReview from "../components/BookReview";
import {
  useDeleteBooksMutation,
  useGetSingleBooksQuery,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

export default function BookDetails() {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetSingleBooksQuery(id);
  const [deleteBook] = useDeleteBooksMutation();

  const handleDelete = (_id: string | undefined) => {
    console.log("Delete This Book", _id);
    if(_id){
      alert("tumi ki sotti delete korte chau")
    }
    deleteBook({ _id });
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%] ">
          <img
            className="rounded-3xl"
            src="https://img.freepik.com/free-psd/soft-cover-book-mockup-scene_358694-4823.jpg?w=740&t=st=1689441169~exp=1689441769~hmac=51dfcfacda0a0e2a86d7b2ad2091c3a3c301188c627116481ec15a9118c71dec"
            alt=""
          />
        </div>
        <div className="w-[50%] space-y-3 mx-3">
          <h1 className="text-3xl font-semibold">Title :{data?.data?.title}</h1>
          <p className="text-xl">Author: {data?.data?.author}</p>
          <p className="text-xl">Genre: {data?.data?.genre}</p>
          <p className="text-xl">
            Publication Date: {data?.data?.publicationDate}
          </p>
          <ul className="space-y-1 text-lg">
            {data?.data?.review?.map((reviews: string) => (
              <li key={reviews}>{reviews}</li>
            ))}
          </ul>
          {user?.email === data?.data?.email ? (
            <>
              <Link to={`/update-book/${id}`}>
                <button className="btn btn-primary">Edit Book</button>
              </Link>

              <button
                className="btn bg-red-800 hover:bg-red-700 text-white ml-10"
                onClick={() => handleDelete(id)}
              >
                Delete Book
              </button>
            </>
          ) : (
            <>
              <button disabled className="btn btn-primary">
                Edit Book
              </button>

              <button
                disabled
                className="btn bg-red-800 hover:bg-red-700 text-white ml-10"
                onClick={() => handleDelete(id)}
              >
                Delete Book
              </button>
            </>
          )}
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
