/* eslint-disable @typescript-eslint/no-misused-promises */

import { useForm, SubmitHandler } from "react-hook-form";

   type Inputs = {
     email: string;
     password: string;
   };


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
 
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
          />
          <br />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
          <br />
          
          <input
            className="border mt-5 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "This is required.",
              minLength: {
                value: 4,
                message: "Min length is 8",
              },
            })}
          />
          <br />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
          <br />
          <input
            className="bg-[#020100] mt-5 w-[360px] h-[53px] rounded-[10px] p-[20px] gap-[10px] text-white font-bold cursor-pointer "
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    );
};

export default LoginForm;
