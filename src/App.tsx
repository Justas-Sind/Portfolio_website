import "./App.scss";
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import SideMenu from "./components/SideMenu/SideMenu";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {

  return (
    <div className='mainLayout'>
      <header>
        <SideMenu />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
