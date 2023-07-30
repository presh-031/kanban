import "./ActiveBoard.css";
import BoardColumn from "./BoardColumn";

import useModal from "../hooks/useModal";
import NewColumn from "./NewColumn";
const ActiveBoard = () => {
  const { isVisible, toggleModal } = useModal();
  return (
    <div className="flex  w-fit gap-[2.4rem] ml-[1.2rem]">
      {/* todo column */}
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <NewColumn />
    </div>
  );
};

export default ActiveBoard;
