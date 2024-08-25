import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#121212] w-full h-screen flex justify-center items-center">
      <div className="md:w-5/12 justify-center items-center bg-[#282828] bg-opacity-80 md:h-[90%] shadow-2xl h-screen flex flex-col gap-8 rounded-3xl p-6  transform transition-transform duration-500 hover:scale-105">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-[#FFFFFF] drop-shadow-lg">
            Welcome Back!
          </h1>
        </div>
        <div>
          <h1 className="text-lg font-medium text-center text-[#B0BEC5] drop-shadow-md">
            Collaborate effortlessly and bring your projects to life faster.
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:px-24 w-10/12">
          <button className="flex gap-4 bg-[#FFFFFF] hover:bg-[#E0E0E0] px-5 py-3 rounded-2xl justify-center items-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Google"
            />
            <h1 className="text-[#424242] font-semibold">Sign in with Google</h1>
          </button>
          <button className="flex gap-4 bg-[#000000] hover:bg-[#333333] text-white px-5 py-3 rounded-2xl justify-center items-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
              alt="Apple"
            />
            <h1 className="font-semibold">Sign in with Apple</h1>
          </button>
          <div className="relative">
            <span className="absolute top-[-14px] left-1/2 transform -translate-x-1/2  px-3 text-sm text-[#B0BEC5]">
              OR
            </span>
          </div>
          <input
            className="px-4 py-3 rounded-lg bg-[#1F1F1F] text-[#E0E0E0] outline-none focus:ring-2 focus:ring-[#00BFFF] transition duration-300 shadow-inner"
            type="text"
            placeholder="Username or email"
          />
          <input
            className="px-4 py-3 rounded-lg bg-[#1F1F1F] text-[#E0E0E0] outline-none focus:ring-2 focus:ring-[#00BFFF] transition duration-300 shadow-inner"
            type="password"
            placeholder="Password"
          />
          <button className="w-32 text-white mx-auto py-2 rounded-lg bg-[#00BFFF] to-[#0052CC] hover:bg-gradient-to-r hover:from-[#009ACD] hover:to-[#009ACD] transition duration-300 shadow-lg transform hover:scale-105">
            Sign in
          </button>
        </div>
        <div className="flex justify-between md:w-9/12 w-11/12 text-[#B0BEC5]">
          <div className="flex gap-1">
            <h1>Don&apos;t have an account?</h1>
            <Link to={"/signup"} className="text-[#00BFFF] font-semibold hover:underline">
              Sign up
            </Link>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <Link className="text-[#00BFFF] font-semibold hover:underline" to={"/login"}>
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
