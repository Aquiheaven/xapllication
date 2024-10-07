// import { useState } from 'react'

// import './App.css'

// function App() {
 

//   return (
//     <>
//       <div>
        
//     </>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TabNavigations from './components/TabNavigation';

import TrendingTopics from './components/TrendingTopics'
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flex bg-black text-white min-h-screen">
        <Sidebar />
        <main className="flex-grow border-x border-gray-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:username" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}