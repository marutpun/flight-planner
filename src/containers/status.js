import React from 'react';
import { useSelector } from 'react-redux';

import { Status } from '../components';

export function StatusContainer() {
  const flights = useSelector((state) => state.flight);

  const renderFlights = flights.map((flight) => (
    <tr key={flight.id}>
      <td>{flight.schedule}</td>
      <td>{flight.to}</td>
      <td>
        {flight.flight.map((codeshare) => (
          <span key={codeshare} style={{ display: 'block' }}>
            {codeshare}
          </span>
        ))}
      </td>
      <td>{flight.terminal}</td>
      <td>{flight.gate}</td>
      <td>{flight.status}</td>
    </tr>
  ));

  return <Status>{renderFlights}</Status>;
}
