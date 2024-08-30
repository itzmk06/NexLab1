const Stat = ({ iconClass, title, count, colorClass }) => (
    <div
      className={`flex gap-2 items-center justify-center bg-white bg-opacity-10 px-3 py-2 rounded-lg hover:scale-105 transition transform duration-200 ease-in-out cursor-pointer shadow-md ${colorClass}`}
    >
      <i className={`${iconClass} text-base mt-1 text-white`}></i>
      <div className="text-center text-white">
        <h1>{title}</h1>
        <h1 className="font-base text-sm">{count} k</h1>
      </div>
    </div>
  );
export default Stat;  