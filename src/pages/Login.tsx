/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
type Inputs = {
  email: string
  password: string
}

export default function Login() {
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
      <div className="w-1/2 mx-auto text-center">
        <div className="text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fdc/89e1/8c73671940a6f474158b15da4e60dcba?Expires=1686528000&Signature=mNfhH1DjBfNYqeEgUzwMUx4egTuaJ0zVS6zY3H-wMtNYvcdVAgVsDudmso-oeoYjgHanApNR~Lzqt~A2qW~KE1LTGZaVWTDFz8SzIz~Y5-IGtkluO4ygKVIe3OHX4zlump-ZfDTKNyBFbFXoqe3AQaK4IZFDW5DSrTEdRx5JhzeH71eUf7Eo-JeMjzNIeb8PNnw1kpf3lymGHZq8Nt-WUssvDSRhrE7PQ2CmAxFWJ~hsRlUW0Ozlt~JwQgHSuVB6b5ZnPPaMoar0S6qgnfahM6AMwZixysi3xWp5O3aZSsblKOr7K-EsgzPTzaoJ~2HO0-1sL4sWnyb~uNGCJAzLBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[62px] h-[49px] mx-auto"
          />
          <h2 className="text-4xl font-bold text-center">
            Welcome <span className="text-[#08A593]">Back!</span>{" "}
          </h2>
          <p className="text-[#667085] mt-3 mb-6">Glad to see, Again!</p>
        </div>
        {/* React hookForm  start*/}
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
            className="bg-[#0d6efd] mt-5 w-[360px] h-[53px] rounded-[10px]  gap-[10px] text-white font-bold cursor-pointer "
            type="submit"
            value="Log In"
          />
        </form>
        {/* React hookForm  end*/}
        <p className="mt-24">
          <span className="text-[#667085]"> Don't have an account yet?</span>
          <Link to='/signup' className="text-semibold text-[#08A593] cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}
