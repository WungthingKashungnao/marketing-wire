import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-full h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
