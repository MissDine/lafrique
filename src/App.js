import { Route, Routes } from "react-router-dom";
import DemoClass from "./Pages/DemoClass";
import HomePage from "./Pages/HomePage";
import NavBarr from "./components/NavBarr";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bookclass" element={<DemoClass />} />
        <Route path="about" element={<About/>} />
      </Routes>
      {/* <HomePage/> */}
      {/* <DemoClass/> */}
    </div>
  );
}

export default App;
