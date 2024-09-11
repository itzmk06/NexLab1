import PropTypes from 'prop-types';

const HireCards = ({ jobData }) => {
  return (
    <div className="bg-[#1e1e1e] flex flex-col -gap-3 w-[96%] max-w-md p-2 rounded-lg shadow-lg transition-transform transform text-zinc-200 my-1">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-7 h-7">
          <img
            src={jobData.companyLogo}
            alt="Company Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-xl font-semibold">
          <h1>{jobData.companyName}</h1>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex gap-3 items-center">
          <h1 className="text-sm font-semibold text-gray-400">Job Title:</h1>
          <h1 className="text-sm">{jobData.jobTitle}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-sm font-semibold text-gray-400">Location:</h1>
          <h1 className="text-sm">{jobData.location}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-sm font-semibold text-gray-400">Job Type:</h1>
          <h1 className="text-sm">{jobData.jobType}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <h1 className="text-sm font-semibold text-gray-400">Requirements:</h1>
          {jobData.requirements.map((req, index) => (
            <span
              key={index}
              className="bg-gray-800 px-3 py-1 rounded-full text-xs font-medium"
            >
              {req}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <h1 className="text-sm font-semibold text-gray-400">Expected Salary Range:</h1>
        <h1 className="text-sm text-green-300">{jobData.salaryRange}</h1>
      </div>
      <div>
        <button className="bg-[#00BFFF] px-2 rounded-md text-sm py-1 text-zinc-900 hover:bg-[#009ACD] transition duration-300 shadow-lg transform hover:scale-105">
          Apply Now
        </button>
      </div>
    </div>
  );
};

HireCards.propTypes = {
  jobData: PropTypes.shape({
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
    salaryRange: PropTypes.string.isRequired,
  }).isRequired,
};

export default HireCards;
