import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import {
  useCreateBookMutation,
  useGetSingleBooksQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookApi";
import { useParams } from "react-router-dom";

type Inputs = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string;
};

export default function UpdateBook() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm<Inputs>();
  const [updatedBook] = useUpdateBookMutation();
  const { data, isLoading } = useGetSingleBooksQuery(id);


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const option = {
      ...data,
      reviews: [],
    };

    const bookData = {
      title: option.title,
      author: option.author,
      genre: option.genre,
      publicationDate: option.publicationDate,
      reviews: option.reviews,
    };
    console.log(bookData)
    updatedBook(bookData);
  };

  if (isLoading) {
    return <p>Loading...........</p>;
  }

  return (
    <div className="mx-auto w-[40%]">
      {/* react hook form */}
      <>
        <div className="text-center mt-5">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center my-5">
              Update This Product
              <span className="text-[#08A593] ">
                {" "}
                {data?.data?.title}!
              </span>{" "}
            </h2>
          </div>
          {/* React hookForm  start*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="title"
              value={data?.data?.title}
              placeholder="Book title"
              {...register("title", {
                required: true,
              })}
            />
            <input
              className="border mt-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="author"
              // value={data?.data?.author}
              placeholder="Author name"
              {...register("author", {
                required: true,
              })}
            />
            <input
              className="border my-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="genre"
              // value={data?.data?.genre}
              placeholder="Genre"
              {...register("genre", {
                required: true,
              })}
            />
            <input
              className="border my-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="publicationDate"
        
              // defaultValue={data?.data?.publicationDate}
              placeholder="Publication date"
              {...register("publicationDate", {
                required: true,
              })}
            />
            <input
              className="border border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="email"
        
              // defaultValue={data?.data?.email}
              placeholder="user email"
              {...register("email", {
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
