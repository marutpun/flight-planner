import styled from 'styled-components';

export const Container = styled.header`
  padding: 1rem 0;
  background: hsl(0, 6%, 97%);
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  text-align: center;

  @media print, screen and (min-width: 40em) {
    font-size: 3.75rem;
  }
`;

export const SubHeading = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
  text-align: center;
`;
