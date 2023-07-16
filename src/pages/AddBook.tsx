import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
};

export default function AddBook() {
  
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="mx-auto w-[40%]">
    
     {/* react hook form */}
     <>
        <div className="text-center mt-5">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center">
              Welcome <span className="text-[#08A593]">Back!</span>{" "}
            </h2>
          </div>
          {/* React hookForm  start*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="title"
              placeholder="Book title"
              {...register("title", {
                required: true,
              })}
            />
            <input
              className="border mt-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="author"
              placeholder="Author name"
              {...register("author", {
                required: true,
              })}
            />
            <input
              className="border my-3 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="genre"
              placeholder="Genre"
              {...register("genre", {
                required: true,
              })}
            />
            <input
              className="border border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="publicationDate"
              placeholder="Publication date"
              {...register("publicationDate", {
                required: true,
              })}
            />
           
           
            <input
              className="bg-[#0d6efd] mt-5 w-[360px] h-[53px] rounded-[10px]  gap-[10px] text-white font-bold cursor-pointer "
              type="submit"
              value="Submit"
            />
          </form>
          {/* React hookForm  end*/}
        
      
          
        </div>
      </>
    </div>
  )
}
