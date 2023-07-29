import ActiveBoard from "./ActiveBoard";
import EmptyBoard from "./EmptyBoard";
import Header from "./Header";

const Main = () => {
  const isBoardEmpty = false;
  return (
    <div
      className={`${
        isBoardEmpty
          ? // "w-full" : "w-fit"
            ""
          : ""
      } min-h-screen min-w-full flex flex-col`}
    >
      <Header />
      <main
        className={`${
          isBoardEmpty ? "grid place-items-center" : ""
        } bg-light-grey flex-1 `}
      >
        {isBoardEmpty ? <EmptyBoard /> : <ActiveBoard />}
      </main>
    </div>
  );
};

export default Main;
