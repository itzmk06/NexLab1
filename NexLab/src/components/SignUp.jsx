import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-[#121212] w-full h-screen flex justify-center items-center">
      <div className="md:w-5/12 justify-center items-center bg-[#282828] bg-opacity-80 md:h-[90%] shadow-2xl h-screen flex flex-col gap-8 rounded-3xl p-6  transform transition-transform duration-500 hover:scale-105">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#FFFFFF] drop-shadow-lg">
            Elevate Your Development Journey
          </h1>
          <p className="text-lg font-medium text-[#B0BEC5] mt-3">
            Join NexLab to collaborate with top-tier developers, shape the future of code, and make your mark on innovation.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:px-24 w-10/12">
          <input
            className="px-4 py-3 rounded-lg bg-[#1A1A1A] text-[#ECEFF1] outline-none focus:ring-2 focus:ring-[#00BFFF] transition duration-300 shadow-inner"
            type="text"
            placeholder="Username or email"
          />
          <input
            className="px-4 py-3 rounded-lg bg-[#1A1A1A] text-[#ECEFF1] outline-none focus:ring-2 focus:ring-[#00BFFF] transition duration-300 shadow-inner"
            type="password"
            placeholder="Password"
          />
          <button className="w-40 text-white mx-auto py-2 rounded-lg bg-[#00BFFF] hover:bg-[#00BFFF] from-[#00BFFF] to-[#0052CC] hover:bg-gradient-to-r hover:from-[#009ACD] hover:to-[#009ACD] transition duration-300 shadow-lg transform hover:scale-110 ">
            Sign up
          </button>
          <hr className="border-t border-[#424242] " />
          <button className="flex gap-4 bg-[#FFFFFF] hover:bg-[#F0F0F0] px-5 py-3 rounded-xl justify-center items-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt="Google"
            />
            <h1 className="text-[#121212] font-bold">Sign up with Google</h1>
          </button>
          <button className="flex gap-4 bg-[#000000] hover:bg-[#1C1C1C] text-white px-5 py-3 rounded-xl justify-center items-center shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              className="w-6"
              src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
              alt="Apple"
            />
            <h1 className="font-bold">Sign up with Apple</h1>
          </button>
          <div className="flex gap-2 justify-center items-center text-[#B0BEC5]">
            <h1>Already have an account?</h1>
            <Link className="text-[#00BFFF] font-semibold hover:underline" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
        
        <div className="px-4 text-sm text-[#B0BEC5]">
          <h1>
            By creating an account, you accept <b>NexLab&apos;s</b> 
            <Link className="text-[#00BFFF] font-semibold hover:underline m-1" to="/terms">
              Terms of service
            </Link> 
             &  
            <Link className="text-[#00BFFF] font-semibold hover:underline m-1" to="/privacy">
              Privacy Policy
            </Link>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
