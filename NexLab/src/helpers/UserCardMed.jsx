const UserCardMed = () => {
  return (
    <div className="w-[94%] mx-auto bg-[#3D3D3D] h-screen rounded-xl py-2">
      <div>
        <div className="flex  text-zinc-200 py-2 bg-[#202020] w-[95%] rounded-lg mx-auto   justify-evenly">
          <div className="m-1 mt-6 flex flex-col items-center">
            <img
              className="w-16 h-16 object-center object-cover rounded-full"
              src="https://images.unsplash.com/photo-1603005901058-02e1cfc65270?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
            />
            <div className="mt-2 text-xs bg-[#ffffff25] bg-opacity-10 px-1 rounded-md py-1 flex gap-1 items-center">
              <img
                className="w-4 h-4  px-[0.1rem] py-[0.1rem] rounded-lg"
                src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
              />
              <h1 className="">React Prodigy</h1>
            </div>
          </div>
          <div className="px-2  w-7/12 mt-2  py-2 flex flex-col gap-[0.1rem]">
            <h1 className="font-semibold">Manoj Kumar M</h1>
            <h1 className="font-semibold">@ jetfuze</h1>
            <h1></h1>
            <div className="text-xs flex gap-1 justify-start flex-wrap">
              {["MERN ", "Machine Learning", "Python", "Java", "C++"].map(
                (item, key) => {
                  return (
                    <h1
                      className="bg-[#3A3A3A] text-xs mt-1 rounded-md px-[0.50rem] py-[0.1rem]"
                      key={key}
                    >
                      {item}
                    </h1>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-200 py-2 flex flex-col gap-3 bg-[#202020] w-[95%] rounded-b-xl mt-[-0.3rem] mx-auto ">
        <div className="mt-[-0.5rem]">
        <div className="flex gap-5 text-xs items-center justify-center mt-1">
            <div className="flex gap-2 items-center bg-white bg-opacity-10 px-2 py-1 rounded-lg">
              <i className="fi fi-br-following text-base"></i>
              <div className="text-center">
                <h1>Following</h1>
                <h1>1 K</h1>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center  bg-white bg-opacity-10 px-2 py-1 rounded-lg">
              <i className="fi fi-br-users font-normal text-base"></i>
              <div className="text-center">
                <h1>Followers</h1>
                <h1>1O K</h1>
              </div>
            </div>
          </div>
          <div className="px-3 mt-1">
            <p className="text-sm">
              I love building and scaling websites and learning to automate the
              same cause I&apos;m lazy dev :P
            </p>
          </div>
          <div className="flex  justify-around gap-1 cursor-pointer">
            <div className="flex gap-2 items-center text-sm px-3 mt-1">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              />
              <h1>LinkedIn</h1>
            </div>
            <div className="flex gap-2 items-center text-sm px-3">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
              />
              <h1>X</h1>
            </div>
            <div className="flex gap-2 items-center text-sm px-3">
              <img
                className="w-4 h-4"
                src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
              />
              <h1>Github</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardMed;
