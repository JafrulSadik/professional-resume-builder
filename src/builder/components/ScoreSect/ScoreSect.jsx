const ScoreSect = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center bg-black dark:bg-gray-700 rounded-md text-dr-txt dark:text-dr-txt h-6 w-10">
          <p className="text-sm">30%</p>
        </div>
        <p className="text-sm dark:text-white">Resume Score</p>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1">
        <div className="w-[30%] bg-li-bg dark:bg-white h-full rounded-full"></div>
      </div>
    </div>
  );
};

export default ScoreSect;
