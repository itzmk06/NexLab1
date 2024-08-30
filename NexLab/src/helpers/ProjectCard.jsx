const ProjectCard = () => {
    return (
        <div className=" bg-[#202020] w-full md:w-full h-24 group rounded-lg shadow-lg p-3 flex justify-between items-center transition transform hover:scale-105 hover:bg-[#292929] duration-300 ease-in-out cursor-pointer ">
            <div className="flex items-center gap-3 ">
                <img 
                    className="w-10 h-10    shadow-inner group-hover:scale-110 transition-transform duration-300 ease-in-out" 
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" 
                    alt="Project Thumbnail" 
                />
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-white font-semibold text-sm truncate">1OOx YouTube</h1>
                    <p className="text-[#B0B0B0] md:text-xs text-sm truncate max-w-[220px] group-hover:text-white">
                        Most Powerful version of YouTube
                    </p>
                    <div className="flex gap-1 mt-1 flex-wrap ">
                        {['React.js', 'MongoDB', 'Node.js'].map((tech, index) => (
                            <span 
                                key={index} 
                                className="bg-[#3A3A3A] text-zinc-200 px-2 py-0.5 rounded-md text-[0.65rem] font-light tracking-wide">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex items-end top-0 right-0 absolute mt-1 ">
                <div className="flex items-center gap-1 bg-gradient-to-r  px-2 py-0.5 rounded-full md:text-xs text-sm text-white shadow-md transform hover:scale-110 transition duration-150 ease-in-out">
                    <img 
                        className="w-4 h-4" 
                        src="https://cdn-icons-png.flaticon.com/128/833/833472.png" 
                        alt="Heart Icon"
                    />
                    <span className="font-semibold text-[FF6B6B]">256</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
