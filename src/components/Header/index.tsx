import logoMobile from "../../assets/assets/logo-mobile.svg";
import arrowDown from "../../assets/assets/icon-chevron-down.svg";
import verticalEllipsis from "../../assets/assets/icon-vertical-ellipsis.svg";
import { HeaderTypes } from "../../typings";
import useModal from "../../hooks/useModal";
import { useState } from "react";

import {
  BoardHeaderDropDown,
  Modal,
  NewTaskModal,
  TaskModalDropDown,
} from "../../index";
// import "./Header.css";

const Header = ({ isBoardEmpty }: HeaderTypes) => {
  // Modal logic
  const { isVisible, toggleModal } = useModal();

  // dropdown logic
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" custom-width bg-white px-[1.6rem] w-[] py-[2rem] flex justify-between items-center">
      <div className="items-center flex">
        <img src={logoMobile} alt="logo" />
        <p className="mr-[.80rem] text-[1.8rem]  ml-[.80rem] text-[#000112] font-bold leading-normal">
          Platform Launch
        </p>
        <img src={arrowDown} alt="arrow-down" />
      </div>
      <div className="flex items-center gap-[1.6rem]">
        <button
          role="button"
          disabled={isBoardEmpty}
          className="py-[1.5rem] transition-all duration-300 hover:bg-main-purple-hover disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center px-[2.5rem] text-white rounded-[2.4rem] bg-main-purple  font-bold leading-normal"
          onClick={toggleModal}
        >
          <span className="text-3xl">+</span>
          <span className="hidden sm:block text-[1.5rem]">Add New Task</span>
        </button>
        <img
          src={verticalEllipsis}
          alt="menu"
          onClick={toggleDropdown}
          className="  cursor-pointer"
        />
        <div className="relative inline-block text-left">
          {isOpen && <BoardHeaderDropDown />}
        </div>
      </div>

      <Modal isVisible={isVisible}>
        <NewTaskModal toggleModal={toggleModal} />
      </Modal>
    </header>
  );
};

export default Header;
