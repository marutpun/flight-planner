import React from 'react';

import { Nav } from '../components';

export function NavContainer() {
  return (
    <Nav>
      <Nav.Container>
        <Nav.Ul>
          <Nav.Li>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav.Li>
          <Nav.Link href="#">About</Nav.Link>
        </Nav.Ul>
      </Nav.Container>
    </Nav>
  );
}
