import logoMobile from "../assets/assets/logo-mobile.svg";
import arrowDown from "../assets/assets/icon-chevron-down.svg";
import verticalEllipsis from "../assets/assets/icon-vertical-ellipsis.svg";
import { GrAdd } from "react-icons/gr";

const Header = () => {
  return (
    <header className="bg-white px-[1.6rem] py-[2rem] flex justify-between items-center">
      <div className="flex items-center">
        <img src={logoMobile} alt="logo" />
        <p className="text-[1.8rem] mr-[.80rem] ml-[.80rem] text-[#000112] font-bold leading-normal">
          Platform Launch
        </p>
        <img src={arrowDown} alt="arrow-down" />
      </div>
      <div className="flex items-center gap-[1.6rem]">
        <button
          role="button"
          disabled
          className="py-[1.5rem] disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center px-[2.5rem] text-white rounded-[2.4rem] bg-main-purple  font-bold leading-normal"
        >
          <GrAdd className="text-2xl" />
          <span className="hidden sm:block text-[1.5rem]">Add New Task</span>
        </button>
        <img src={verticalEllipsis} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
