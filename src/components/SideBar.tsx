import darkLogo from "../assets/assets/logo-dark.svg";
import hideSideBar from "../assets/assets/icon-hide-sidebar.svg";
import boardIcon from "../assets/assets/icon-board.svg";

const SideBar = () => {
  return (
    <aside className="w-[30rem] flex flex-col border border-red-800 min-h-screen">
      <div className="h-[9.6rem] flex items-center">
        <img src={darkLogo} alt="logo" className="ml-[3.4rem] object-cover" />
      </div>

      <div className="flex-1 pr-[2.4rem] border border-red-800">
        <p className="ml-[3.2rem] mb-[1.9rem] text-medium-grey text-[1.2rem] font-bold leading-normal tracking-[.24rem] mt-[1.7rem]">
          ALL BOARDS (3)
        </p>
        <ul>
          <li className="flex bg-main-purple border border-red-800 gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img
              src={boardIcon}
              alt="board-icon"
              width={16}
              height={16}
              className=""
            />
            <span className="text-[1.5rem] font-bold leading-normal text-white">
              Platform Launch
            </span>
          </li>
          <li className="flex bg-white border border-red-800 gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img
              src={boardIcon}
              alt="board-icon"
              width={16}
              height={16}
              className=""
            />
            <span className="text-[1.5rem] font-bold leading-normal text-medium-grey">
              Marketing Plan
            </span>
          </li>
          <li className="flex bg-white border border-red-800 gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img
              src={boardIcon}
              alt="board-icon"
              width={16}
              height={16}
              className=""
            />
            <span className="text-[1.5rem] font-bold leading-normal text-medium-grey">
              Roadmap
            </span>
          </li>
          <li className="flex bg-white border border-red-800 gap-[1.6rem] py-[1.5rem] pl-[3.2rem] rounded-r-full">
            <img
              src={boardIcon}
              alt="board-icon"
              width={16}
              height={16}
              className=""
            />
            <span className="text-[1.5rem] font-bold leading-normal text-main-purple">
              + Create New Board
            </span>
          </li>
        </ul>
      </div>

      <div>
        <div>
          {/* mcolor mode switcher */}
          <div className="mb-[2.4rem]"></div>
          <div className="flex items-center gap-[1.5rem] ml-[3.1rem]">
            <img src={hideSideBar} alt="hide-sidebar" />
            <p>Hide Sidebar</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
