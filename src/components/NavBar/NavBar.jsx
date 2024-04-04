import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-12 h-16 border-b-[1px] border-gray-100 w-full dark:border-gray-900">
      <div className="flex items-center">
        <div>
          <p className="flex justify-center text-li-txt font-extrabold dark:text-dr-txt">
            Resume
          </p>
        </div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
