/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.email, data.password, data.name);
  };

  return (
    <div className=" flex justify-center bg-black h-[600px] mt-6">
      <div className="w-[60%]  bg-[url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg?w=740&t=st=1689398226~exp=1689398826~hmac=bd21ad6d021164f556dc5f9b5d72083e77c2c2a627846a03febbb20c4f82ae32)]  flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-semibold text-white">Welcome back!</h1>
          <p className="text-xl text-white">
            Get access to your Orders, Wishlist and Recommendations.
          </p>
        </div>
      </div>

      {/* react hook form */}
      <div className="w-[40%] ">
        <div className="mx-auto text-center mt-5">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center">
              Welcome <span className="text-[#08A593]">Back!</span>{" "}
            </h2>
            <p className="text-[#667085] mt-3 mb-6">Glad to see, Again!</p>
          </div>
          {/* React hookForm  start*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border border-[#464660] mb-5 w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
              type="name"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
              })}
            />

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
              className="bg-[#0d6efd] mt-5 w-[360px] h-[53px] rounded-[10px]  gap-[10px] text-white font-bold cursor-pointer "
              type="submit"
              value="Sign Up"
            />
          </form>
          {/* React hookForm  end*/}
          {/* social login in */}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3  dark:text-[#6c757d]">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"> </div>
          </div>

          <div className="flex mt-3 justify-center space-x-4">
            <button>
              <FaGoogle className ="text-3xl text-[#4285F4]"/>
            </button>
            <button>
              <FaFacebookF className ="text-3xl text-[#0165E1]"/>
            </button>
            <button>
              <FaGithub className ="text-3xl text-[#333]"/>
            </button>
          </div>

          {/* end */}
          <p className="mt-10">
            <span className="text-[#667085]">Already you have an account?</span>
            <Link
              to="/login"
              className="text-semibold text-[#08A593] cursor-pointer"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
