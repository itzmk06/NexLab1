import LandingBody from "./LandingBody"
import NavBar from "../helpers/NavBar"
const Landing = () => {
  return (
    <div className="p-1 w-full h-screen overflow-hidden bg-[#F6F7EB]">
        <NavBar/>
        <LandingBody/>
    </div>
  )
}

export default Landing;
