import "./App.css";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <div className="hidden min-[740px]:block">
        <SideBar />
      </div>
      <Main />
    </div>
  );
}

export default App;
