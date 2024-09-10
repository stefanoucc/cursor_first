import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/quote');  // Navigate to the QuoteForm page
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Car Quoting App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Get a Quote for Your Car Today!</h2>
        <p>Enter your car details and receive an accurate price range estimate.</p>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </section>

      <section className="recent-quotes">
        {/* Your recently quoted cars */}
      </section>

      <footer>
        <p>&copy; 2024 Car Quoting App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
