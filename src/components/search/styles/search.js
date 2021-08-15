import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 1.875rem;
  font-family: 'Lato', sans-serif;
`;

export const HeadingSub = styled.p`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
`;

export const SearchInput = styled.input`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
  box-shadow: none;

  &:focus {
    box-shadow: none;
    border: 1px solid hsla(0, 0%, 0%, 0.6);
  }
`;

export const SearchTerminal = styled.select`
  font-size: 0.875rem;
  font-family: 'Lato', sans-serif;
  box-shadow: none;

  &:focus {
    box-shadow: none;
    border: 1px solid hsla(0, 0%, 0%, 0.6);
  }
`;
