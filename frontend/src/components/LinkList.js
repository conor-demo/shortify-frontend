// frontend/src/components/LinkList.js
import React, { useState, useEffect } from 'react';

function LinkList() {
  const [links, setLinks] = useState([]);
  const apiUrl = process.env.API_URL;

  useEffect(() => {
    async function fetchLinks() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Could not fetch links:", error);
        setLinks([]);
      }
    }

    fetchLinks();
  }, [apiUrl]);

  return (
    <div>
      <h2>Links</h2>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;