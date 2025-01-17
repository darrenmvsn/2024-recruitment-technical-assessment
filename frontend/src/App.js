import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Courses from './components/Courses/Courses';
// import Modal from './components/Modal/Modal';
function App() {
  const [clickLogo, setClickLogo] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false)
  return (
    <div className="overflow-x-hidden" >
      <Navbar setClickLogo={setClickLogo} clickLogo={clickLogo} />
      
      <div className='flex flex-col justify-center w-9/10'>
        <Header clickLogo={clickLogo}  />
        <SearchBar modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
        <Courses />
      </div>
      
    </div>
  );
}

export default App;
