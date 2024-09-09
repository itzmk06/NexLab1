import PropTypes from "prop-types";
import Badge from "./Badge";
const Profile = ({ profilePic, name, username, skills }) => (
    <div className="flex items-center justify-evenly w-full px-3  z-0">
      <div className="flex flex-col items-center relative">
        <img
          className="w-20 h-20 object-center object-cover rounded-full hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
          src={profilePic}
          alt="User Profile"
        />
        <Badge
          src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
          label="React Guru"
        />
      </div>
      <div className="flex flex-col gap-2 w-7/12">
        <h1 className="font-bold text-white text-lg leading-tight">{name}</h1>
        <h2 className="font-medium text-zinc-200 text-md">@{username}</h2>
        <div className="flex flex-wrap gap-1 mt-2">
          {skills.map((skill, index) => (
            <h1
              className="bg-[#3A3A3A] md:text-xs text-sm rounded-md px-2 py-0.5 text-zinc-200 transition-all duration-200 ease-in-out cursor-pointer"
              key={index}
            >
              {skill}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );

export default Profile;

Profile.propTypes={
  profilePic:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  username:PropTypes.string.isRequired,
  skills:PropTypes.array.isRequired
}