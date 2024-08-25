import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:bg-[#F6F7EB] bg-[#CECCCC] w-full  h-screen flex justify-center items-center rounded-lg ">
      <div className="md:w-5/12 justify-center items-center bg-[#cecccca2] h-[80%] flex flex-col gap-5  rounded-3xl p-2">
        <div>
          <h1 className="text-2xl font-extrabold text-center">Welcome Back!</h1>
        </div>
        <div>
          <h1 className="text-lg font-base text-center">
            Collaborate effortlessly and bring your projects to life faster.
          </h1>
        </div>
        <div className="flex flex-col gap-5 md:px-20 w-10/12 ">
          <button className="flex gap-3 bg-white px-5 py-2 rounded-xl justify-center items-center">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            />
            <h1>Sign in with Google</h1>
          </button>
          <button className="flex gap-3 bg-black text-white px-5 py-2 rounded-xl justify-center items-center">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
            />
            <h1>Sign in with Apple</h1>
          </button>
          <hr className="border-t border-black border-opacity-20 font-bold" />
          <input
            className="px-2 py-2 rounded-md outline:none focus:outline-[#1964D5]"
            type="text"
            placeholder="Username or email"
          />
          <input
            className="px-2 py-2 rounded-md focus:outline-[#1964D5]"
            type="password"
            placeholder="Password"
          />
          <button className="w-20 text-white mx-auto  py-1 rounded-md bg-[#1964D5]">
            Sign in
          </button>
        </div>
        <div className="flex justify-between md:w-9/12 w-11/12">
          <div className="flex gap-1">
            <h1>don&apos;t have an account? </h1>
            <Link to={"/signup"} className="text-[#1964D5] font-semibold">
              Sign up
            </Link>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <Link className="text-[#1964D5] font-semibold" to={"/login"}>
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
