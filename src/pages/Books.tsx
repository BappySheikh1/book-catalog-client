import { SubmitHandler, useForm } from "react-hook-form";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { addToWishList } from "../redux/features/wishList/wishList.Slice";
import { useAppDispatch } from "../redux/hook";
import { IBook } from "../types/globalTypes";
import { Link } from "react-router-dom";

type Inputs = {
  title: string;
  genre: string;
  publicationDate: string;
};

export default function Books() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();
  const { data, isLoading } = useGetBooksQuery(undefined,{
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }
 

  const handleWishList = (data: IBook) => {
    console.log(data);
    dispatch(addToWishList(data));
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)

  }


  return (
    <>
      <header className="">
        <div className="navbar mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border  border-[#464660] w-[150px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="title"
              placeholder="Search title"
              {...register("title")}
            />
            <input
              className="border mx-2 border-[#464660] w-[150px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="genre"
              placeholder="Search genre"
              {...register("genre")}
            />
            <input
              className="border  border-[#464660] w-[150px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="publicationDate"
              placeholder="Search publicationDate"
              {...register("publicationDate")}
            />
           
            
            

            <input
              className="btn  ms-3 w-[100px] h-[53px] rounded-full gap-[10px] font-bold cursor-pointer "
              type="submit"
              value="Submit"
            />
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
