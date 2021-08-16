import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Search } from '../components';
import { selectTerminal, addQueryWord } from '../redux/flight';

export function SearchContainer() {
  const [input, setInput] = useState('');
  const currentTerminal = useSelector((state) => state.terminalFilter);
  const dispatch = useDispatch();

  const _handleSearchInput = (e) => setInput(e.target.value);

  const _handleSelectTerminal = (e) => dispatch(selectTerminal(e.target.value));

  const _handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(addQueryWord(input));
    setInput('');
  };

  return (
    <Search>
      <Search.Heading>Departure Flights</Search.Heading>
      <Search.HeadingSub>
        Keep track of outgoing flights with live updates.
      </Search.HeadingSub>
      <form className="grid-x grid-padding-x" onSubmit={_handleSearchSubmit}>
        <div className="small-12 medium-8 cell">
          <label className="show-for-sr" htmlFor="search">
            Flight No / City
          </label>
          <div className="input-group">
            <Search.InputFlight
              type="text"
              className="input-group-field"
              placeholder="Flight No / City"
              value={input}
              onChange={_handleSearchInput}
            />
            <div className="input-group-button">
              <Search.Button type="submit" className="button">
                <FontAwesomeIcon icon={faSearch} />
              </Search.Button>
            </div>
          </div>
        </div>
        <div className="small-12 medium-4 cell">
          <label className="show-for-sr" htmlFor="terminal">
            Terminal
          </label>
          <Search.InputTerminal
            id="terminal"
            value={currentTerminal}
            onChange={_handleSelectTerminal}
          >
            <option value="all">All terminals</option>
            <option value="t1">Terminal 1</option>
            <option value="t2">Terminal 2</option>
            <option value="t3">Terminal 3</option>
          </Search.InputTerminal>
        </div>
      </form>
    </Search>
  );
}
