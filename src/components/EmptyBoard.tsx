import React from "react";

const EmptyBoard = () => {
  return (
    <div className=" w-[34.3rem] mx-auto  text-center">
      {" "}
      <p className="mb-[2.5rem] text-medium-grey text-[1.8rem] font-bold leading-normal ">
        This board is empty. Create a new column to get started.
      </p>
      <button
        role="button"
        className="py-[1.5rem] text-white px-[1.8rem] rounded-[2.4rem] bg-main-purple text-[1.5rem] font-bold leading-normal"
      >
        + Add New Column
      </button>
    </div>
  );
};

export default EmptyBoard;
