import { TaskModalTypes } from "../typings";

import verticalEllipsis from "../assets/assets/icon-vertical-ellipsis.svg";
const TaskModal = ({ toggleModal }: TaskModalTypes) => {
  return (
    <div
      onClick={() => {
        toggleModal(false);
      }}
      className="overlay fixed left-0 top-0 right-0 z-[500] h-screen  bg-black bg-opacity-50"
    >
      <div className="wrapper fixed left-0 top-[14%] bottom-[10%] z-[1000] flex max-h-screen w-screen justify-center overflow-y-auto overflow-x-hidden">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal relative max-w-[48rem] z-[1000] mx-[1.6rem] h-fit rounded-[0.6rem] bg-white p-[2.4rem]"
        >
          <div className="mb-[2.4rem] flex items-center justify-between">
            <p className="text-[1.80rem] w-[27.4rem]  font-bold leading-normal">
              Research pricing points of various competitors and trial different
              business models
            </p>
            <img src={verticalEllipsis} alt="menu" />
          </div>
          <p className="font-medium w-[29.5rem] mb-[2.4rem]  text-medium-grey text-[1.3rem] leading-[2.3rem]">
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>

          <p className="text-[1.2rem] font-bold text-medium-grey leading-normal">
            Subtasks (2 of 3)
          </p>
          <ul className="flex flex-col gap-[.8rem]">
            <li className="bg-light-grey gap-[1.6rem] rounded-[.4rem] flex items-center py-[1.4rem] pl-[1.2rem] pr-[.8rem]">
              <input type="checkbox" id="subtask-1" />
              <label
                htmlFor="subtask-1"
                className="text-[1.2rem] font-bold leading-normal opacity-50 text-black"
              >
                Research competitor pricing and business models
              </label>
            </li>
            <li className="bg-light-grey gap-[1.6rem] rounded-[.4rem] flex items-center py-[1.4rem] pl-[1.2rem] pr-[.8rem]">
              <input type="checkbox" id="subtask-1" />
              <label
                htmlFor="subtask-1"
                className="text-[1.2rem] font-bold leading-normal opacity-50 text-black"
              >
                Outline a business model that works for our solution
              </label>
            </li>
            <li className="bg-light-grey gap-[1.6rem] rounded-[.4rem] flex items-center py-[1.4rem] pl-[1.2rem] pr-[.8rem]">
              <input type="checkbox" id="subtask-1" />
              <label
                htmlFor="subtask-1"
                className="text-[1.2rem] font-bold leading-normal  text-black"
              >
                Surveying and testing
              </label>
            </li>
          </ul>

          <p className="mt-[2.4rem] text-[1.2rem] font-bold leading-normal text-medium-grey">
            Current Status
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
