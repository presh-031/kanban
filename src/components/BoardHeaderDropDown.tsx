import { DeleteTaskModal, EditTaskModal, Modal, TaskModal } from "..";
import useModal from "../hooks/useModal";

const BoardHeaderDropDown = () => {
  //   const {
  //     isVisible: isDeleteTaskModalVisible,
  //     toggleModal: toggleDeleteTaskModal,
  //   } = useModal();

  //   const {
  //     isVisible: isEditTaskModalVisible,
  //     toggleModal: toggleEditTaskModal,
  //   } = useModal();
  return (
    <div className="origin-top-right  absolute right-0 mt-2 w-[19.2rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <ul
        className="p-[1.6rem]"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <li
          role="menuitem"
          className="  cursor-pointer mb-[1.6rem] text-[1.3rem] font-medium leading-[2.3rem] text-medium-grey"
        >
          Edit Board
        </li>

        <li
          role="menuitem"
          className=" text-[1.3rem] cursor-pointer font-medium leading-[2.3rem] text-red"
        >
          Delete Board
        </li>
      </ul>
    </div>
  );
};

export default BoardHeaderDropDown;
