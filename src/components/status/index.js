import React from 'react';

export default function Status({ children }) {
  return (
    <section className="grid-container">
      <table>
        <thead>
          <tr>
            <th>Schedule</th>
            <th>To</th>
            <th>Flight</th>
            <th>Terminal/Row</th>
            <th>Gate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  );
}
