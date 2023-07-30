import darkLogo from "../assets/assets/logo-dark.svg";
import hideSideBar from "../assets/assets/icon-hide-sidebar.svg";
import boardIcon from "../assets/assets/icon-board.svg";
import lightThemeIcon from "../assets/assets/icon-light-theme.svg";
import darkThemeIcon from "../assets/assets/icon-dark-theme.svg";
import ThemeSwitcher from "./ThemeSwitcher";

const SideBar = () => {
  return (
    <aside className="w-[30rem] border-r-[1px] border-r-lines-light flex flex-col  min-h-screen">
      <div className="h-[9.6rem] flex items-center">
        <img src={darkLogo} alt="logo" className="ml-[3.4rem] object-cover" />
      </div>

      <div className="flex-1 pr-[2.4rem] ">
        <p className="ml-[3.2rem] mb-[1.9rem] text-medium-grey text-[1.2rem] font-bold leading-normal tracking-[.24rem] mt-[1.7rem]">
          ALL BOARDS (3)
        </p>
        <ul>
          <li className="cursor-pointer flex bg-main-purple transition-all duration-300 text-white   gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img src={boardIcon} alt="board-icon" width={22} height={16} />
            <span className="text-[1.5rem] font-bold leading-normal">
              Platform Launch
            </span>
          </li>
          <li className="cursor-pointer flex hover:bg-light-grey transition-all duration-300 hover:text-main-purple text-medium-grey  gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img src={boardIcon} alt="board-icon" width={22} height={16} />
            <span className="text-[1.5rem] font-bold leading-normal ">
              Marketing Plan
            </span>
          </li>
          <li className="cursor-pointer flex hover:bg-light-grey transition-all duration-300 hover:text-main-purple text-medium-grey  gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img src={boardIcon} alt="board-icon" width={22} height={16} />
            <span className="text-[1.5rem] font-bold leading-normal ">
              Roadmap
            </span>
          </li>
          <li className="flex cursor-pointer bg-white  gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img src={boardIcon} alt="board-icon" width={22} height={16} />
            <span className="text-[1.5rem] font-bold leading-normal text-main-purple">
              + Create New Board
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-20">
        <div>
          {/* color mode switcher */}
          <div className="mb-[2.4rem] rounded-md  bg-light-grey  mx-[2.4rem] py-4 flex gap-8 items-center justify-center">
            <img src={lightThemeIcon} alt="light" className=" cursor-pointer" />
            <ThemeSwitcher />
            <img src={darkThemeIcon} alt="dark" className=" cursor-pointer" />
          </div>
          <div className="flex w-fit cursor-pointer items-center mb-[4.7rem] gap-[1.5rem] ml-[3.1rem]">
            <img src={hideSideBar} alt="hide-sidebar" />
            <p className="font-bold text-[1.5rem] text-medium-grey leading-normal ">
              Hide Sidebar
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
