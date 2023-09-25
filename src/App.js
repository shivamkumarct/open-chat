import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <di>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/signup" element={<ErrorPage/>} />
        <Route path="/login" element={<ErrorPage/>} />

      </Routes>
    </di>
  );
}

export default App;
