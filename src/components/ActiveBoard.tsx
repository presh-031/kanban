import "./ActiveBoard.css";
import { useState } from "react";
import TaskModal from "./TaskModal";
const ActiveBoard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex outline w-fit gap-[2.4rem] ml-[1.2rem]">
      {/* todo column */}
      <div>
        <p className="flex gap-[1.2rem] my-[2.4rem] items-center">
          <span className="w-[1.5rem] h-[1.5rem] block rounded-full bg-[#49C4E5]"></span>
          <span className="text-[1.2rem] font-bold leading-normal tracking-[0.24rem] text-medium-grey">
            {" "}
            TODO (4)
          </span>
        </p>
        <ul className="flex flex-col gap-[2rem]">
          {isOpen && <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />}
          <li
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]"
          >
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
        </ul>
      </div>

      {/* doing column */}
      <div>
        <p className="flex gap-[1.2rem] my-[2.4rem] items-center">
          <span className="w-[1.5rem] h-[1.5rem] block rounded-full bg-[#49C4E5]"></span>
          <span className="text-[1.2rem] font-bold leading-normal tracking-[0.24rem] text-medium-grey">
            {" "}
            TODO (4)
          </span>
        </p>
        <ul className="flex flex-col gap-[2rem]">
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
        </ul>
      </div>

      {/* done column */}
      {/* todo column */}
      <div>
        <p className="flex gap-[1.2rem] my-[2.4rem] items-center">
          <span className="w-[1.5rem] h-[1.5rem] block rounded-full bg-[#49C4E5]"></span>
          <span className="text-[1.2rem] font-bold leading-normal tracking-[0.24rem] text-medium-grey">
            {" "}
            TODO (4)
          </span>
        </p>
        <ul className="flex flex-col gap-[2rem]">
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
          <li className="cursor-pointer py-[2.3rem] rounded-[.8rem] shadow-custom px-[1.6rem] bg-white w-[28rem]">
            <p className="text-black mb-[.8rem] font-bold leading-normal text-[1.5rem]">
              Build UI for onboarding flow
            </p>
            <p className="text-medium-grey text-[1.2rem] font-bold leading-normal">
              0 of 3 subtasks
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActiveBoard;
