import "./ActiveBoard.css";
import BoardColumn from "./BoardColumn";

import useModal from "../hooks/useModal";
const ActiveBoard = () => {
  const { isVisible, toggleModal } = useModal();
  return (
    <div className="flex  w-fit gap-[2.4rem] ml-[1.2rem]">
      {/* todo column */}
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
    </div>
  );
};

export default ActiveBoard;
