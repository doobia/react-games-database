import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Games from './Pages/Games';
import ErrorPage from './Pages/ErrorPage';
import SideBar from './components/SideBar/SideBar';
import Developer from './Pages/Developer';

function App() {
  return (
    <BrowserRouter>
    <SideBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/developers" element={<Developer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
