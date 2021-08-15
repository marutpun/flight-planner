import styled from 'styled-components';

export const NavBar = styled.nav`
  margin: 0 0 1rem;
  background: rgb(234, 234, 234);
  box-shadow: 2px 3px 5px hsla(0, 0%, 0%, 0.2);

  @media print, screen and (min-width: 40em) {
    margin: 0 0 3.125rem;
  }
`;
