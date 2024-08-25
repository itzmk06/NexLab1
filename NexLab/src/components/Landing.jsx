import LandingBody from "./LandingBody"
import NavBar from "../helpers/NavBar"
const Landing = () => {
  return (
    <div className=" w-full h-screen overflow-hidden bg-[#282828]">
        <NavBar/>
        <LandingBody/>
    </div>
  )
}

export default Landing;
