import close from "../assets/assets/icon-cross.svg";

const Subtasks = () => {
  return (
    <div>
      <p className="mb-[.8rem] text-medium-grey text-[1.2rem] font-bold leading-normal">
        Subtasks
      </p>
      <div className=" mb-[1.2rem] flex gap-[1.6rem] items-center">
        <input
          type="text"
          placeholder="e.g. Make coffee"
          className="rounded-[.4rem] outline-none text-[1.3rem] font-medium leading-[2.3rem] py-[.8rem] px-[1.6rem] block w-full border-[1px] border-opacity-25"
          style={{ borderColor: "rgba(130, 143, 163, 0.25)" }}
        />
        <div>
          <img src={close} alt="close" />
        </div>
      </div>
      <button className="w-full block rounded-[2rem] py-[.8rem] text-main-purple bg-main-purple bg-opacity-10 text-[1.3rem] font-bold leading-[2.3rem]">
        +Add New Subtask
      </button>
    </div>
  );
};
export default Subtasks;
