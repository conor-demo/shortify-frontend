import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const apiUrl = process.env.API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend</h1>
        {data ? (
          <p>Data from API: {JSON.stringify(data)}</p>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
