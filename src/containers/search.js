import React from 'react';
import { Search } from '../components';

export function SearchContainer() {
  return (
    <Search>
      <Search.Heading>Departure Flights</Search.Heading>
      <Search.HeadingSub>
        Keep track of outgoing flights with live updates.
      </Search.HeadingSub>
      <form className="grid-x grid-padding-x">
        <div className="small-12 medium-8 cell">
          <label className="show-for-sr" htmlFor="search">
            Flight No / City
          </label>
          <Search.SearchInput type="text" placeholder="Flight No / City" />
        </div>
        <div className="small-12 medium-4 cell">
          <label className="show-for-sr" htmlFor="terminal">
            Terminal
          </label>
          <Search.SearchTerminal id="terminal">
            <option value="all">All terminals</option>
            <option value="t1">Terminal 1</option>
            <option value="t2">Terminal 2</option>
            <option value="t3">Terminal 3</option>
          </Search.SearchTerminal>
        </div>
      </form>
    </Search>
  );
}
