import React from 'react';
import { useSelector } from 'react-redux';

import { Status } from '../components';
import { valueToStatus } from '../utils';

export function StatusContainer() {
  const flights = useSelector((state) => state.flight);

  const renderFlightsList = flights.map((flight) => (
    <Status.TrBackground key={flight.id}>
      <td>
        <Status.Info>{flight.schedule}</Status.Info>
      </td>
      <td>
        <Status.InfoCity>{flight.to}</Status.InfoCity>
      </td>
      <td>
        {flight.flight.map((codeshare) => (
          <Status.Info key={codeshare}>{codeshare}</Status.Info>
        ))}
      </td>
      <td>
        <Status.Info>{flight.terminal}</Status.Info>
      </td>
      <td>
        <Status.Info>{flight.gate}</Status.Info>
      </td>
      <td>{valueToStatus(flight.status)}</td>
    </Status.TrBackground>
  ));

  return (
    <Status>
      <table>
        <colgroup className="grid-x">
          <col className="small-2 cell" />
          <col className="small-2 cell" />
          <col className="small-2 cell" />
          <col className="small-2 cell" />
          <col className="small-2 cell" />
          <col className="small-2 cell" />
        </colgroup>
        <Status.Thead>
          <tr>
            <Status.ThOne>Schedule</Status.ThOne>
            <Status.ThTwo>To</Status.ThTwo>
            <Status.ThOne>Flight</Status.ThOne>
            <Status.ThOne>Terminal/Row</Status.ThOne>
            <Status.ThOne>Gate</Status.ThOne>
            <Status.ThOne>Status</Status.ThOne>
          </tr>
        </Status.Thead>
        <Status.Tbody>{renderFlightsList}</Status.Tbody>
      </table>
    </Status>
  );
}
