import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./pages/intro";
import Register from "./auth/register";

export default function App() {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}
