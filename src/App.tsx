import "./App.scss";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import SideMenu from "./components/SideMenu/SideMenu";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ResumePage from "./components/ResumePage/ResumePage";
import WorksPage from "./components/WorksPage/WorksPage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {

  return (
    <div className='mainLayout'>
      <header>
        <SideMenu />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/resume' element={<ResumePage />}/>
          <Route path='/works' element={<WorksPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
