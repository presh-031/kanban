const TaskModal = ({ hideModal }) => {
  return (
    <div
      onClick={hideModal}
      className="overlay fixed left-0 border border-red-800 top-0 right-0 z-[500] h-screen  bg-black bg-opacity-50"
    >
      <div className="wrapper fixed border border-red-800 left-0 top-[14%] bottom-[10%] z-[1000] flex max-h-screen w-screen justify-center overflow-y-auto overflow-x-hidden">
        <div
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
          className="modal relative z-[1000] mx-[2.4rem] h-fit rounded-[0.8rem] bg-white p-[3.2rem] sm:mx-[11.4rem] min-[700px]:p-[4.8rem]"
        >
          <span className="">THANK YOU</span> FOR YOUR ORDER
          <button
            role="button"
            onClick={() => {
              hideModal();
            }}
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
