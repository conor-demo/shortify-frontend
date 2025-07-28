import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = Date.now().toString(); // simple unique ID, can use uuid instead
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/links';

    try {
      const response = await axios.post(apiUrl, {
        id: id,
        url: link,
      });
      setMessage(response.data.message || 'Link uploaded!');
      setLink('');
    } catch (error) {
      setMessage('Error uploading link.');
      console.error('Error uploading link:', error);
    }
  };

  return (
      <div className="App">
        <h1>Link Uploader</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Link:
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <button type="submit">Upload Link</button>
        </form>
        {message && <p>{message}</p>}
      </div>
  );
}

export default App;
