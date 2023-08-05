import close from "../assets/assets/icon-cross.svg";

const NewTaskModal = ({ toggleModal }) => {
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
          <p className="text-[1.80rem] w-[27.4rem]  font-bold leading-normal">
            Add New Task
          </p>

          <form>
            <div>
              <label
                htmlFor="title"
                className="text-medium-grey text-[1.2rem] font-bold leading-normal"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="e.g. Take coffee break"
                className="rounded-[.4rem] outline-none text-[1.3rem] font-medium leading-[2.3rem] py-[.8rem] px-[1.6rem] block w-full border-[1px] border-opacity-25"
                style={{ borderColor: "rgba(130, 143, 163, 0.25)" }}
              />
            </div>

            <div>
              {" "}
              <label
                htmlFor="description"
                className="text-medium-grey text-[1.2rem] font-bold leading-normal"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                cols={30}
                rows={5}
                className="rounded-[.4rem] outline-none text-[1.3rem] font-medium leading-[2.3rem] py-[.8rem] px-[1.6rem] block w-full border-[1px] border-opacity-25"
                style={{ borderColor: "rgba(130, 143, 163, 0.25)" }}
              ></textarea>
            </div>

            <NewSubtasks />

            <div>
              <p className="mb-[.8rem] text-medium-grey text-[1.2rem] font-bold leading-normal">
                Status
              </p>
              {/* dropdown */}
              <div></div>
            </div>

            <button className="w-full block rounded-[2rem] py-[.8rem] text-white bg-main-purple text-[1.3rem] font-bold leading-[2.3rem]">
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const NewSubtasks = () => {
  return (
    <>
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
    </>
  );
};

export default NewTaskModal;
