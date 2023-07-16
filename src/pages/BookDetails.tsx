import { useParams } from "react-router-dom";
import BookReview from "../components/BookReview";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Rating: {book?.author}</p>
          <p className="text-xl">Rating: {book?.genre}</p>
          <p className="text-xl">Rating: {book?.publicationDate}</p>
          <ul className="space-y-1 text-lg">
            {book?.review?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button>Edit Book</button>
          <button>Update Book</button>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
}
