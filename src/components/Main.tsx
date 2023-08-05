import { Header, ActiveBoard, EmptyBoard } from "../index";

const Main = () => {
  const isBoardEmpty = false;

  return (
    <div className="flex min-h-screen flex-col  min-w-full">
      <Header isBoardEmpty={isBoardEmpty} />

      <main
        className={`${
          isBoardEmpty ? "grid place-items-center" : ""
        } bg-light-grey flex-1 h-full  overflow-x-scroll `}
      >
        {isBoardEmpty ? <EmptyBoard /> : <ActiveBoard />}
      </main>
    </div>
  );
};

export default Main;
