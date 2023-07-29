import logoMobile from "../assets/assets/logo-mobile.svg";
import arrowDown from "../assets/assets/icon-chevron-down.svg";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoMobile} alt="logo" />
          <p>Platform Launch</p>
          <img src={arrowDown} alt="arrow-down" />
        </div>
        <div>
          <button
            role="button"
            disabled
            className="py-[1.5rem] text-white px-[1.8rem] rounded-[2.4rem] bg-main-purple text-[1.5rem] font-bold leading-normal"
          >
            + Add New Task
          </button>
          <img src="" alt="" />
        </div>
      </header>

      <main className="grid bg-light-grey flex-1 place-items-center">
        <div className=" w-[34.3rem] text-center">
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
      </main>
    </div>
  );
};

export default Main;
