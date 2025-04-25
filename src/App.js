import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MatchDetailPage from './pages/MatchDetailPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/match/:id" element={<MatchDetailPage />} />
          </Routes>
        </main>
        <footer className="py-4 text-center text-gray-300">
          <p>&copy; 2025 UEFA Champions League Results</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;