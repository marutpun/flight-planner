import React from 'react';

import {
  Heading,
  HeadingSub,
  SearchInput,
  SearchTerminal,
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

Search.SearchInput = function SearchSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />;
};

Search.SearchTerminal = function SearchSearchTerminal({
  children,
  ...restProps
}) {
  return <SearchTerminal {...restProps}>{children}</SearchTerminal>;
};
