import "./ActiveBoard.css";

import { BoardColumn, NewColumn } from "../../index";
const ActiveBoard = () => {
  return (
    <div className="flex  w-fit gap-[2.4rem] ml-[1.2rem] pr-[22.4rem]">
      {/* todo column */}
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <NewColumn />
    </div>
  );
};

export default ActiveBoard;
