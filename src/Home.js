import React from 'react';
import './Home.css';

const Home = () => {
  const recentQuotes = [
    { brand: 'Toyota', model: 'Corolla', year: 2018, price: '$15,000 - $17,000' },
    { brand: 'Ford', model: 'F-150', year: 2020, price: '$25,000 - $28,000' },
    { brand: 'Honda', model: 'Civic', year: 2019, price: '$18,000 - $20,000' }
  ];

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
        <button onClick={() => window.location.href = '/quote'}>Get Started</button>
      </section>

      <section className="recent-quotes">
        <h3>Recently Quoted Cars</h3>
        <div className="quotes-list">
          {recentQuotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <h4>{quote.brand} {quote.model}</h4>
              <p>Year: {quote.year}</p>
              <p>Price Range: {quote.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Car Quoting App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
