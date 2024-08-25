import { Link } from "react-router-dom";

const SignUp=()=>{
    return(
        <div className="md:bg-[#F6F7EB] bg-[#CECCCC] w-full  h-screen flex justify-center items-center rounded-lg ">
            <div className="md:w-5/12 justify-center items-center bg-[#cecccca2] h-[90%] flex flex-col gap-5  rounded-3xl p-2">
                <div>
                    <h1 className="text-2xl font-extrabold text-center">Elevate Your Development Journey</h1>
                </div>
                <div>
                    <h1 className="text-lg font-base text-center">Join NexLab to collaborate with top-tier developers, shape the future of code, and make your mark on innovation.</h1>
                </div>
                <div className="flex flex-col gap-5 md:px-20 w-10/12 ">
                    <input className="px-2 py-2 rounded-md outline:none focus:outline-[#1964D5]" type="text" placeholder="Username or email" />
                    <input className="px-2 py-2 rounded-md focus:outline-[#1964D5]" type="password" placeholder="Password" />
                    <button className="w-20 text-white mx-auto  py-1 rounded-md bg-[#1964D5]" >Sign up</button>
                    <hr className="border-t border-white" />
                    <button className="flex gap-3 bg-white px-5 py-2 rounded-xl justify-center items-center">
                        <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" />
                        <h1>Sign up with Google</h1>
                    </button>
                    <button className="flex gap-3 bg-black text-white px-5 py-2 rounded-xl justify-center items-center">
                        <img className="w-6" src="https://cdn-icons-png.flaticon.com/128/179/179309.png" />
                        <h1>Sign up with Apple</h1>
                    </button>
                    <div className="flex gap-2 justify-center items-center">
                        <h1>Already have an account?</h1>
                        <Link className="text-[#1964D5] font-semibold" to={"/login"}>Login</Link>
                    </div>
                </div>
                    <div className="px-1 text-sm">
                    <h1>By creating an account, you accept the <b>NexLab&apos;s</b> <Link className="text-[#1964D5] font-semibold">Terms of service</Link> & <Link className="text-[#1964D5] font-semibold">Privacy Policy</Link> </h1>
                    </div>
            </div>

        </div>
    )
}

export default SignUp;