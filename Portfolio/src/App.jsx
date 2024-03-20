import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Resume from "./pages/resume"
import { MyNavBar } from "./components/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <MyNavBar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;