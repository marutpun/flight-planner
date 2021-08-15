import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFlight } from '../redux/flight';
import { Planner } from '../components/';

export function PlannerContainer() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    schedule: '',
    to: '',
    flight: '',
    terminal: '',
    gate: '',
    status: 0,
  });

  const _handleInput = (event) =>
    setInput({ ...input, [event.target.name]: event.target.value });

  const _handleSubmit = (event) => {
    event.preventDefault();

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
    <Planner>
      <Planner.Heading>Flight Planner</Planner.Heading>
      <Planner.HeadingSub>
        Plan your trips in advance. Check out the flight schedules of airlines
        connected to Singapore.
      </Planner.HeadingSub>
      <form onSubmit={_handleSubmit} className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              Scheduled
              <input
                type="text"
                placeholder="e.g. 14:55"
                name="schedule"
                onChange={_handleInput}
                value={input.schedule}
                required
              />
            </Planner.Label>
          </div>
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              To
              <input
                type="text"
                placeholder="e.g. London"
                name="to"
                onChange={_handleInput}
                value={input.to}
                required
              />
            </Planner.Label>
          </div>
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              Flight
              <input
                type="text"
                placeholder="e.g. TG916, SQ107 (separated by comma)"
                name="flight"
                onChange={_handleInput}
                value={input.flight}
                required
              />
            </Planner.Label>
          </div>
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              Terminal/Row
              <input
                type="text"
                placeholder="e.g. T1, T2, T3, T4/Row"
                name="terminal"
                onChange={_handleInput}
                value={input.terminal}
                required
              />
            </Planner.Label>
          </div>
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              Gate
              <input
                type="text"
                placeholder="Gate"
                name="gate"
                onChange={_handleInput}
                value={input.gate}
                required
              />
            </Planner.Label>
          </div>
          <div className="small-12 medium-4 cell">
            <Planner.Label>
              Status
              <select
                name="status"
                onChange={_handleInput}
                required
                value={input.status}
              >
                <option value="0">None</option>
                <option value="1">Departed</option>
                <option value="2">Gate Closed</option>
                <option value="3">Last Call</option>
                <option value="4">Gate Closing</option>
                <option value="5">Gate Open</option>
              </select>
            </Planner.Label>
          </div>
        </div>
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 cell">
            <Planner.Button type="submit" className="button success expanded">
              Add flight
            </Planner.Button>
          </div>
          <div className="small-12 medium-6 cell">
            <Planner.Button type="reset" className="button alert expanded">
              Reset
            </Planner.Button>
          </div>
        </div>
      </form>
    </Planner>
  );
}
