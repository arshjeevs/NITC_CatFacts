import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [facts, setFacts] = useState([]);
  const [count, setCount] = useState(1);

  const fetchCatFacts = async (count) => {
    try {
      const response = await axios.get(`https://meowfacts.herokuapp.com/?count=${count}`);
      setFacts(response.data.data);
    } catch (error) {
      console.error("Error fetching cat facts:", error);
    }
  };

  const handleFetchFacts = () => {
    fetchCatFacts(count);
  };

  return (
    <div className="App">
      <h1>Random Cat Facts</h1>
      <label htmlFor="count">Number of facts:</label>
      <input
        type="number"
        id="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        min="1"
      />
      <button onClick={handleFetchFacts}>Get Cat Facts</button>
      <div>
        {facts.map((fact, index) => (
          <p key={index}>{fact}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
