import React, { useState } from 'react';

function LinkUploader() {
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Link uploaded successfully!');
      } else {
        setMessage(data.error || 'Failed to upload link.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Failed to upload link.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Link:
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </label>
        <button type="submit">Upload Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LinkUploader;