import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-12 h-16 border-b-[1px] border-gray-100 w-full dark:border-gray-900">
      <div className="flex items-center">
        <div>
          <p className="flex justify-center  bg-gradient-to-r from-black to-gray-500 bg-clip-text tracking-tight text-transparent font-extrabold dark:bg-gradient-to-r dark:from-white dark:to-blue-400">
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
