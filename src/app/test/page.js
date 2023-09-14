'use client'
import React, { useState } from 'react';

const ReservationGenerator = () => {
  const [reservationIds, setReservationIds] = useState([]);

  const generateReservationId = () => {
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random string and convert it to uppercase
    setReservationIds([...reservationIds, randomId]); // Add the random ID to the list
  };

  return (
    <div>
      <h1>Reservation IDs</h1>
      <button onClick={generateReservationId}>Generate Reservation ID</button>
      <ul>
        {reservationIds.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationGenerator;
