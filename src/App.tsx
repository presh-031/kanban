import { Main, SideBar } from "./index";

function App() {
  return (
    <div className="flex  overflow-x-scroll">
      <div className="hidden min-[740px]:block">
        <SideBar />
      </div>
      <Main />
    </div>
  );
}

export default App;
