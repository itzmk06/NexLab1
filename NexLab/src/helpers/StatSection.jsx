import Stat from "./Stat";
import PropTypes from "prop-types";

const StatsSection = ({ stats }) => (
    <div className="grid grid-cols-2 gap-5 md:text-xs text-sm items-center justify-center mt-2 w-full px-5">
      {stats.map((stat, index) => (
        <Stat
          key={index}
          iconClass={stat.iconClass}
          title={stat.title}
          count={stat.count}
          colorClass={stat.colorClass}
        />
      ))}
    </div>
  );
export default StatsSection;

StatsSection.propTypes={
  stats:PropTypes.string.isRequired
}