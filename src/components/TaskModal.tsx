const TaskModal = ({ hideModal }) => {
  return (
    <div
      onClick={hideModal}
      className="overlay fixed left-0 top-0 z-[500] h-screen w-full bg-black bg-opacity-50"
    >
      <div className="wrapper fixed left-0 top-[14%] bottom-[10%] z-[1000] flex max-h-screen w-full justify-center overflow-y-auto overflow-x-hidden">
        <div
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
          className="modal relative z-[1000] mx-[2.4rem] h-fit rounded-[0.8rem] bg-white p-[3.2rem] sm:mx-[11.4rem] min-[700px]:p-[4.8rem]"
        >
          <p className="mb-[1.6rem] text-[2.4rem] font-bold leading-[2.8rem] tracking-[0.086rem] text-black sm:mb-[2.4rem]  sm:text-[3.2rem] sm:leading-[3.6rem] sm:tracking-[.14rem] ">
            <span className="sm:block">THANK YOU</span> FOR YOUR ORDER
          </p>

          <button
            role="button"
            onClick={() => {
              hideModal();
            }}
            className="mt-[2.3rem] w-full bg-[#D87D4A] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white  hover:bg-[#FBAF85] sm:mt-[4.6rem]"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
