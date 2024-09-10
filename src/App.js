import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';  // The home page with the "Get Started" button
import QuoteForm from './QuoteForm';  // The form component for car quotes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuoteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
