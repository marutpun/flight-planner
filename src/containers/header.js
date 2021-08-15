import React from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Title>Flight Information</Header.Title>
      <Header.SubHeading>
        Stay informed of your flight status with real-time updates.
      </Header.SubHeading>
    </Header>
  );
}
