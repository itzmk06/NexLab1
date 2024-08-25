import { Link } from "react-router-dom";

const LandingBody = () => {
  return (
    <div className="flex h-screen text-[#E0E0E0] bg-[#282828]">
      <div className="flex flex-col mt-[-35%] md:mt-[-10%] text-4xl text-center gap-7 pt-[10%] md:gap-8 md:mx-2 justify-center items-center main-font3 md:text-6xl w-full">
        <h1 className="font-extrabold text-[#F5F5F5] tracking-wider">
          Where Developers Shape Code&apos;s Future.
        </h1>
        <h1 className="font-extrabold text-[#F5F5F5] tracking-wider">
          United by Ambition, Driven by Innovation
        </h1>
        <div>
          <h1 className="md:text-2xl text-xl main-font1 font-semibold text-[#B0BEC5] text-center leading-relaxed">
            Discover top projects and engage with an elite global developer community
          </h1>
        </div>
        <div>
          <Link to={'/dashboard'}>
            <button className="text-lg font-semibold main-font1 px-6 py-3 bg-[#00BFFF] text-[#0D0D0D] rounded-lg hover:bg-[#009ACD] transition-transform duration-300 hover:scale-110">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
