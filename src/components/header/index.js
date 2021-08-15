import React from 'react';
import { Container, Heading, SubHeading } from './styles/header';

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <div className="grid-container">{children}</div>
    </Container>
  );
}

Header.Title = function HeaderHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Header.SubHeading = function HeaderSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};
