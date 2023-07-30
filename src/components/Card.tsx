import TaskModal from "./TaskModal";
import Modal from "./ui/Modal";

import useModal from "../hooks/useModal";

const Card = () => {
  // Modal logic
  const { isVisible, toggleModal } = useModal();

  return (
    <div>
      <Modal isVisible={isVisible} hideModal={toggleModal}>
        <TaskModal hideTaskModal={toggleModal} />
      </Modal>

      <li
        onClick={() => {
          toggleModal();
        }}
        className="group cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]"
      >
        <p className="text-black group-hover:text-main-purple transition-all duration-300 mb-[.8rem] font-bold leading-normal text-[1.5rem]">
          Build UI for onboarding flow
        </p>
        <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
          0 of 3 subtasks
        </p>
      </li>
    </div>
  );
};

export default Card;
