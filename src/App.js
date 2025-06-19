import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.API_URL || 'http://localhost:3001';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/links`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({ message: 'Error fetching data' });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default App;