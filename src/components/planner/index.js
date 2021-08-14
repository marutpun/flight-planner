import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFlight } from '../../redux/flight';

import { Heading, HeadingSecondary } from './styles/planner';

export default function Planner() {
  const [input, setInput] = useState({
    schedule: '',
    to: '',
    flight: '',
    terminal: '',
    gate: '',
    status: 0,
  });
  const dispatch = useDispatch();

  const _handleInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const _handleSubmit = (e) => {
    e.preventDefault();
    addFlight;
    dispatch(addFlight(input));

    setInput({
      schedule: '',
      to: '',
      flight: '',
      terminal: '',
      gate: '',
      status: 0,
    });
  };

  return (
    <section className="grid-container">
      <Heading>Flight planner</Heading>
      <HeadingSecondary>
        Plan your trips in advance. Check out the flight schedules of airlines
        connected to Singapore.
      </HeadingSecondary>

      <form onSubmit={_handleSubmit}>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="small-12 medium-4 cell">
              <label>
                Scheduled
                <input
                  type="text"
                  placeholder="Scheduled"
                  name="schedule"
                  onChange={_handleInput}
                  value={input.schedule}
                />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                To
                <input
                  type="text"
                  placeholder="To"
                  name="to"
                  onChange={_handleInput}
                  value={input.to}
                />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Flight
                <input
                  type="text"
                  placeholder="Flight"
                  name="flight"
                  onChange={_handleInput}
                  value={input.flight}
                />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Terminal/Row
                <input
                  type="text"
                  placeholder="e.g. T1, T2, T3, T4/Row"
                  name="terminal"
                  onChange={_handleInput}
                  value={input.terminal}
                />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Gate
                <input
                  type="text"
                  placeholder="Gate"
                  name="gate"
                  onChange={_handleInput}
                  value={input.gate}
                />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Status
                <select name="status" onChange={_handleInput} value={status}>
                  <option value="0">00 None</option>
                  <option value="1">01 Departed</option>
                  <option value="2">02 Gate Closed</option>
                  <option value="3">03 Gate Closing</option>
                  <option value="4">04 Gate Open</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 cell">
            <button type="submit" className="button success expanded">
              Add flight
            </button>
          </div>
          <div className="small-12 medium-6 cell">
            <button type="reset" className="button alert expanded">
              Reset
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
