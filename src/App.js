import React from 'react';
import NotesPage from './Pages/NotesPages/NotesPage';
import Home from './Pages/Home/Home';
import Sidebar from './UI/Sidebar/Sidebar';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app__wrapper'>
      <BrowserRouter>
        <Sidebar/>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/notes" element={<NotesPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;