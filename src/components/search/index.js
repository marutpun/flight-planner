import React from 'react';

import {
  Heading,
  HeadingSub,
  InputFlight,
  Button,
  InputTerminal,
} from './styles/search';

export default function Search({ children }, ...restProps) {
  return (
    <section className="grid-container" {...restProps}>
      {children}
    </section>
  );
}

Search.Heading = function SearchHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Search.HeadingSub = function SearchHeadingSub({ children, ...restProps }) {
  return <HeadingSub {...restProps}>{children}</HeadingSub>;
};

Search.InputFlight = function SearchInputFlight({ ...restProps }) {
  return <InputFlight {...restProps} />;
};

Search.Button = function SearchButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Search.InputTerminal = function SearchInputTerminal({
  children,
  ...restProps
}) {
  return <InputTerminal {...restProps}>{children}</InputTerminal>;
};
