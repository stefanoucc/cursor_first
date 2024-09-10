import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch replaced by Routes
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Add your routes here */}
          <Route path="/" element={<Home />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
