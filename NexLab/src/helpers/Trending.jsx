import { projectData } from "../Constants/constant";
import ProjectCard from "./ProjectCard";
const Trending=()=>{
    return(
        <div className="w-[98%] px-2 transform   flex justify-center md:w-full ml-1 md:ml-0 md:mt-[-0.4rem] md:p-2 md:pr-3  overflow-y-auto h-50">
            <div className="bg-[#F4F4F4] w-full h-full px-2 py-1 rounded-xl bg-opacity-10 text-zinc-100">
            <div className="flex gap-1 items-center justify-start">
                    <img className="w-5 h-5 mb-1" src="https://cdn-icons-png.flaticon.com/128/785/785116.png" />
                    <h1 className="text-base font-bold">Trending Now</h1>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                {
                    projectData.data1.map((project,index)=>{
                    return<ProjectCard key={index} project_logo={project.project_logo} project_title={project.project_title} project_description={project.project_description} project_stack={project.project_stack} project_likes={project.project_likes}/>
                    })
                }
                
                </div>
                <div className="flex flex-row items-center justify-start mt-2">
                    <button className=" px-2 py-1 mb-1 text-sm md:font-semibold bg-[#00BFFF] rounded-md text-zinc-700 shadow-lg transition-transform duration-300 ease-in-out hover:bg-[#1b98c2a8] transform hover:scale-105">Discover more</button>
                </div>
            </div>
        </div>
    )
}
export default Trending;