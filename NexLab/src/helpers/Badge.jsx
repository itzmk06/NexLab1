import PropTypes from 'prop-types';

const Badge = ({ src, label }) => (
    <div className="flex items-center gap-1 mr-2 mt-2  bg-[#ffffff25] bg-opacity-20 px-2 py-1 rounded-md backdrop-blur-md shadow-md transform group-hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
      <img
        className="w-5 h-5 px-[0.04rem] py-[0.05rem] rounded-lg"
        src={src}
        alt="Badge Icon"
      />
      <h1 className="text-blue-500 font-semibold md:text-sm text-sm">{label}</h1>
    </div>
  );
export default Badge;

Badge.propTypes={
  src:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
}