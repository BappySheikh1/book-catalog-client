export default function Login() {
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
      <div className="w-[40%]">login field</div>
    </div>
  );
}
