import { DeleteTaskModalTypes } from "../typings";

const DeleteTaskModal = ({ toggleDeleteTaskModal }: DeleteTaskModalTypes) => {
  return (
    <div
      onClick={() => {
        toggleDeleteTaskModal(false);
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
          <p className="text-red text-[1.8rem] font-bold leading-normal">
            Delete this task?
          </p>
          <p className="font-medium w-[29.5rem] my-[2.4rem]  text-medium-grey text-[1.3rem] leading-[2.3rem]">
            Are you sure you want to delete the ‘Platform Launch’ board? This
            action will remove all columns and tasks and cannot be reversed.{" "}
          </p>
          <button className="py-[.8rem] mb-[1.6rem] w-full text-white text-[1.3rem] bg-red rounded-[2rem] font-bold leading-[2.3rem]">
            Delete
          </button>
          <button
            onClick={() => {
              toggleDeleteTaskModal;
            }}
            className="py-[.8rem] w-full text-main-purple text-[1.3rem] bg-main-purple bg-opacity-10 rounded-[2rem] font-bold leading-[2.3rem]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
