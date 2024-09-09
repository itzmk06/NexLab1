import HireCards from "./HireCards";
import HireTopBar from "./HireTopBar";
import { jobData } from "../Constants/constant";

const NexHire=()=>{
    return(
        <div className="md:w-3/12 overflow-y-auto bg-[#3D3D3D] ml-4 mr-4 rounded-t-xl h-screen max-h-[calc(100vh-4rem)]  mt-14  shrink-0">
            <HireTopBar/>
            <div className="flex flex-col justify-center items-center mt-[-1rem]">
                {
                    jobData.map((job,index)=>{
                        return <HireCards key={index} jobData={job}/>
                    })
                }
            </div>
        </div>
    )
};

export default NexHire;