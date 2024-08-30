import ProjectCard from "./ProjectCard";
const Trending=()=>{
    return(
        <div className="w-[98%] px-2 transform flex justify-center md:w-full ml-1 md:ml-0 md:py-2 md:p-2 md:pr-3 md:mt-12 mt-16 overflow-auto h-50">
            <div className="bg-[#F4F4F4] w-full h-full px-2 py-1 rounded-xl bg-opacity-10 text-zinc-100">
            <div className="flex gap-1 items-center justify-start">
                    <img className="w-5 h-5 mb-1" src="https://cdn-icons-png.flaticon.com/128/785/785116.png" />
                    <h1 className="text-base font-bold">Trending Now</h1>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>  
                </div>
                <div className="flex flex-row items-center justify-start mt-2">
                    <button className=" bg-[#00BFFF] text-sm py-1 font-bold text-zinc-700 hover:bg-[#009ACD] transition-transform duration-300 hover:scale-105 px-2  rounded-lg">Discover more</button>
                </div>
            </div>
        </div>
    )
}
export default Trending;