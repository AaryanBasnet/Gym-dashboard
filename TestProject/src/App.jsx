import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import Member from './components/Member';
import Events from './components/Events';
import Transaction from './components/Transaction';
import Trainers from './components/Trainers';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <NavigationBar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/members" element={<Member />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
