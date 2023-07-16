import { SubmitHandler, useForm } from "react-hook-form";

import {
  useGetSingleBooksQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

export default function UpdateBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit } = useForm<Inputs>();
  const { data, isLoading } = useGetSingleBooksQuery(id);

  const [updatedBook] = useUpdateBookMutation();
  if (isLoading) {
    return (
      <div className="w-[100%] mx-auto">
        <div className="w-16 h-16 text-center border-4 border-dashed rounded-full animate-spin text-red-700"></div>
      </div>
    );
  }
  const { title, author, genre, publicationDate } = data.data;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const bookData = {
      id,
      ...data,
    };
    try {
      await updatedBook(bookData).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="mx-auto w-[40%]">
      {/* react hook form */}
      <>
        <div className="text-center mt-5">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center my-5">
              Update This Product
              <span className="text-[#08A593] "> {title}!</span>{" "}
            </h2>
          </div>
          {/* React hookForm  start*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="title"
              defaultValue={title}
              placeholder="Book title"
              {...register("title", {
                required: true,
              })}
            />
            <input
              className="border mt-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="author"
              defaultValue={author}
              placeholder="Author name"
              {...register("author", {
                required: true,
              })}
            />
            <input
              className="border my-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="genre"
              defaultValue={genre}
              placeholder="Genre"
              {...register("genre", {
                required: true,
              })}
            />
            <input
              className="border my-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="publicationDate"
              defaultValue={publicationDate}
              placeholder="Publication date"
              {...register("publicationDate", {
                required: true,
              })}
            />

            <input
              className="bg-[#0d6efd] mt-5 w-[360px] h-[53px] rounded-[10px]  gap-[10px] text-white font-bold cursor-pointer "
              type="submit"
              value="Confirm Update Book"
            />
          </form>
          {/* React hookForm  end*/}
        </div>
      </>
    </div>
  );
}
