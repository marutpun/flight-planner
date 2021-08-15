import React from 'react';
import { NavBar } from './styles/nav';

export default function Nav({ children, ...restProps }) {
  return <NavBar {...restProps}>{children}</NavBar>;
}

Nav.Container = function NavContainer({ children, ...restProps }) {
  return (
    <div className="grid-container" {...restProps}>
      {children}
    </div>
  );
};

Nav.Ul = function NavUl({ children, ...restProps }) {
  return (
    <ul className="menu" {...restProps}>
      {children}
    </ul>
  );
};

Nav.Li = function NavLi({ children, ...restProps }) {
  return <li {...restProps}>{children}</li>;
};

Nav.Link = function NavLink({ href, children, ...restProps }) {
  return (
    <a href={href} {...restProps}>
      {children}
    </a>
  );
};
