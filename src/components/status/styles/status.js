import styled from 'styled-components';

export const Thead = styled.thead`
  background: hsl(0, 0%, 53%);
  font-family: 'Lato', sans-serif;
  color: hsl(0, 0%, 100%);
  border: 0;
`;

export const Tbody = styled.tbody`
  border: 0;
`;

export const ThOne = styled.th`
  width: 8.33333%;
  text-align: center;
`;

export const ThTwo = styled.th`
  width: 16.66667%;
  text-align: center;
`;

export const TrBackground = styled.tr`
  background: hsl(0, 6%, 97%);
  &:nth-child(even) {
    background: hsl(0, 2%, 92%);
  }
`;

export const InfoCity = styled.span`
  display: block;
  text-transform: capitalize;
`;

export const Info = styled.span`
  display: block;
  text-transform: uppercase;
`;

export const InfoTerminal = styled.span`
  color: hsl(210, 51%, 35%);
  display: block;
  text-transform: uppercase;
`;
