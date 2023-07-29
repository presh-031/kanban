import ActiveBoard from "./ActiveBoard";
import EmptyBoard from "./EmptyBoard";
import Header from "./Header";

import useModal from "../hooks/useModal";
const Main = () => {
  const isBoardEmpty = false;

  const { isVisible, toggleModal } = useModal();

  return (
    <div className="flex min-h-screen flex-col border-[10px] border-red-800 min-w-full">
      <Header />

      <main
        className={`${
          isBoardEmpty ? "grid place-items-center" : ""
        } bg-light-grey flex-1 h-full outline overflow-x-scroll `}
      >
        {isBoardEmpty ? <EmptyBoard /> : <ActiveBoard />}
        {/* <EmptyBoard /> */}
      </main>
    </div>
  );
};

export default Main;
