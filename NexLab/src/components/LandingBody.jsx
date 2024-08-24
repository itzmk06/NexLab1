import { Link } from "react-router-dom";

const LandingBody = () => {
  return (
    <div className="flex h-screen bg-[#DAF0EE]">
      <div className="flex flex-col mt-[-35%] md:mt-[-10%] text-5xl text-center gap-5 pt-[10%] md:gap-6 md:mx-2 justify-center items-center main-font3  md:text-6xl w-full">
        <h1 className="font-bold">Where developers shape code&apos;s future</h1>
        <h1 className="font-bold"> United by ambition driven by innovation</h1>
        <div>
          <h1 className="md:text-2xl text-xl main-font1 font-bold md:font-semibold md:mt-2 text-center">
            Discover top projects and engage with an elite global developer
            community
          </h1>
        </div>
        <div>
           <Link to={'/home'}>
           <button   className="text-base font-medium main-font1 px-3 py-2 bg-black text-white rounded-full">Get Started</button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
