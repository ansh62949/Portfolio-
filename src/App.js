import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Desktop } from './components/desktop/Desktop';
import ProjectDetail from './pages/ProjectDetail';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black">
        <Routes>
          {/* Main Linux Portfolio Desktop OS */}
          <Route path="/" element={<Desktop />} />

          {/* Standalone Route for Direct Project Deep Links */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Traditional Web Page Route Fallback */}
          <Route path="/classic" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
