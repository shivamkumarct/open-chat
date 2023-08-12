import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <di>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </di>
  );
}

export default App;
