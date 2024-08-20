import React, { useState, useEffect } from 'react';

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>Stored Data</h1>
      {data ? (
        <div>
          <p><strong>Student Name:</strong> {data.name}</p>
          <p><strong>Student RollNo:</strong> {data.rollno}</p>
          <p><strong>College Name:</strong> {data.collge}</p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Remark:</strong> {data.remark}</p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Data;
