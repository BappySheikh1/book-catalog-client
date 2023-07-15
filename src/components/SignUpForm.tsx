/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
  email: string
  password: string
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.email,data.password)
  }

  return (
    <div className=" flex justify-center bg-black h-[600px]">
      <div className="w-[60%]  bg-[url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg?w=740&t=st=1689398226~exp=1689398826~hmac=bd21ad6d021164f556dc5f9b5d72083e77c2c2a627846a03febbb20c4f82ae32)]  flex items-center justify-center">
        <div>
        <h1 className="text-5xl font-semibold text-white">Welcome back!</h1>
        <p className="text-xl text-white">
        Get access to your Orders, Wishlist and Recommendations.
        </p>

        </div>
      </div>

      {/* react hook form */}
      <div className="w-[40%]">
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
    </div>
  );
}
