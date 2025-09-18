import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage";
import JoinPage from "./pages/JoinPage";

function App() {
  const location = useLocation();

  if (location.pathname === "/donate") {
    window.location.href = "https://hcb.hackclub.com/donations/start/cal-commit";
    return null;
  }

  if (location.pathname === "/join") {
    window.location.href = "https://forms.gle/91z4C2VNWNVbzCS37";
    return null;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
