import "./ActiveBoard.css";
import BoardColumn from "./BoardColumn";

const ActiveBoard = () => {
  return (
    <div className="flex outline w-fit gap-[2.4rem] ml-[1.2rem]">
      {/* todo column */}
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
    </div>
  );
};

export default ActiveBoard;
