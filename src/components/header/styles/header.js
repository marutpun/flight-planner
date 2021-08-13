import styled from 'styled-components';

export const Header = styled.header`
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

export const HeadingSecondary = styled.p`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
  text-align: center;
`;
