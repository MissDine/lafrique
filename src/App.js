import { Route, Routes } from "react-router-dom";
import DemoClass from "./Pages/DemoClass";
import HomePage from "./Pages/HomePage";
import NavBarr from "./components/NavBarr";

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bookclass" element={<DemoClass />} />
      </Routes>
      {/* <HomePage/> */}
      {/* <DemoClass/> */}
    </div>
  );
}

export default App;
