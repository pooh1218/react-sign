// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AppSection from './components/AppSection';
import TaskCountdown from './components/TaskCountdown';
import TaskHall from './components/TaskHall';
import MemberList from './components/MemberList';
import RegulatoryAuthority from './components/RegulatoryAuthority';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AppSection />
      <TaskCountdown />
      <TaskHall />
      <MemberList />
      <RegulatoryAuthority />
      <Footer />
    </div>
  );
}

export default App;
