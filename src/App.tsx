import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import SideMenu from "./components/SideMenu/SideMenu";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/ResumePage/SkillsPage";
import WorksPage from "./components/WorksPage/WorksPage";
import ContactPage from "./components/ContactPage/ContactPage";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <div className="mainLayout">
      <header>
        <SideMenu />
      </header>
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
