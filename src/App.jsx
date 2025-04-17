import { Outlet } from "react-router";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-between flex-col text-sm">
        <Navbar />
        <div className="flex-grow bg-gradient-to-bl from-blue-950 to-blue-900">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
