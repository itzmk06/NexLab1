import LandingBody from "./LandingBody"
import NavBar from "../helpers/NavBar"
const Landing = () => {
  return (
    <div className="p-1 w-full h-screen overflow-hidden bg-[#DAF0EE]">
        <NavBar/>
        <LandingBody/>
    </div>
  )
}

export default Landing;
