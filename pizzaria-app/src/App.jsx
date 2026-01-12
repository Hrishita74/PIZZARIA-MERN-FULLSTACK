import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Users/Login";
import Signup from "./pages/Users/Signup";
import OrderPizza from "./pages/OrderPizza/OrderPizza";
import BuildPizza from "./pages/BuildPizza/BuildPizza";
import Cart from "./pages/Cart/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<OrderPizza />} />
        <Route path="/build" element={<BuildPizza />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
