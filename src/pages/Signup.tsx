import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useAppDispatch } from "../redux/hook";
import { createUser } from "../redux/features/user/userSlice";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.email, data.password, data.name);
    dispatch(createUser({ email: data.email, password: data.password }));
    navigate("/");
  };

  return (
    <div className=" flex justify-center bg-black h-[600px] ">
      <div className="w-[60%] relative  bg-[url(https://img.freepik.com/free-photo/free-trial-storage-member-concept_53876-119992.jpg?w=740&t=st=1689403163~exp=1689403763~hmac=b9dd8bf572b4b0c620feeefaa0e0962665262298d585d064021fc5b7305e24a1)] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50">
          {/* <h1 className="text-5xl font-semibold text-white">Welcome back!</h1>
          <p className="text-xl text-white">
            Sign up with your email and personal details to get started!
          </p> */}
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
            <br />
            <input
              className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
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
              <FaGoogle className="text-3xl text-[#4285F4]" />
            </button>
            <button>
              <FaFacebookF className="text-3xl text-[#0165E1]" />
            </button>
            <button>
              <FaGithub className="text-3xl text-[#333]" />
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
