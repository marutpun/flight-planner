import React from 'react';
import { Heading, HeadingSecondary } from './styles/header';

export default function Header() {
  return (
    <header className="grid-container">
      <Heading>Flight Information Tools</Heading>
      <HeadingSecondary>
        Stay informed of your flight status with real-time updates.
      </HeadingSecondary>
    </header>
  );
}
