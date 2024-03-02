import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import HeaderPage from "./layouts/HeaderPage";
import FooterPage from "./layouts/FooterPage";
import SearchPage from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
    <HeaderPage/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
      <FooterPage/>
    </BrowserRouter>
  )
}
