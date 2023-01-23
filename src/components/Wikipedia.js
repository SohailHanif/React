import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Wikipedia() {
  const [page, setPage] = useState({});
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=&explaintext=&titles=${search}`);
        setPage(response.data.query.pages);
      } catch (err) {
        setError(err);
      }
    }
    if (search) {
      fetchData();
    }
  }, [search]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>Wikipedia</h2>
      <form>
        <label>
          Search:
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        </label>
        <button type="submit" onClick={e => e.preventDefault()}>Search</button>
      </form>
      {Object.values(page).map((p) => (
        <div key={p.pageid}>
          <h3>{p.title}</h3>
          <p>{p.extract}</p>
        </div>
      ))}
    </div>
  );
}

export default Wikipedia;