import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
