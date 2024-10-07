import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-data', {
        key,
        value,
      });
      alert('Data stored successfully!');
      setKey('');
      setValue('');
    } catch (error) {
      console.error('Error storing data:', error);
      alert('Failed to store data');
    }
  };

  return (
    <div className="App">
      <h2>Store Data in Firebase Realtime Database</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Key:</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Value:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Store Data</button>
      </form>
    </div>
  );
};

export default App;
