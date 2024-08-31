import PropTypes from "prop-types";
const SocialLinks = ({ links }) => (
    <div className="flex justify-around gap-1 cursor-pointer  w-full px-4">
      {links.map((link, index) => (
        <div
          className="flex gap-2 items-center text-sm px-2 hover:scale-110 transition transform duration-150 ease-in-out hover:bg-[#ffffff25] hover:bg-opacity-10 rounded-lg py-2"
          key={index}
        >
          <img
            className="w-5 h-5 transition-all duration-200 hover:opacity-75"
            src={link.icon}
            alt={`${link.name} Icon`}
          />
          <h1 className="text-white">{link.name}</h1>
        </div>
      ))}
    </div>
  );
export default SocialLinks;

SocialLinks.propTypes={
  links:PropTypes.array.isRequired

}