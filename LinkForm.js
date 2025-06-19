import React, { useState } from 'react';

function LinkForm() {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.API_URL + '/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, description }),
      });

      if (response.ok) {
        alert('Link saved successfully!');
        setUrl('');
        setDescription('');
      } else {
        alert('Failed to save link.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the link.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Link</button>
    </form>
  );
}

export default LinkForm;