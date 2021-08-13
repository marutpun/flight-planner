import React from 'react';
import { Heading, HeadingSecondary } from './styles/planner';

export default function Planner() {
  return (
    <section className="grid-container">
      <Heading>Flight planner</Heading>
      <HeadingSecondary>
        Plan your trips in advance. Check out the flight schedules of airlines
        connected to Singapore.
      </HeadingSecondary>

      <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="small-12 medium-4 cell">
              <label>
                Scheduled
                <input type="text" placeholder="Scheduled" />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                To
                <input type="text" placeholder="To" />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Flight
                <input type="text" placeholder="Flight" />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Terminal/Row
                <input type="text" placeholder="e.g. T1, T2, T3, T4/Row" />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Gate
                <input type="text" placeholder="Gate" />
              </label>
            </div>
            <div className="small-12 medium-4 cell">
              <label>
                Status
                <select>
                  <option value="00">00 None</option>
                  <option value="01">01 Departed</option>
                  <option value="02">02 Gate Closed</option>
                  <option value="03">03 Gate Closing</option>
                  <option value="04">04 Gate Open</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="button expanded">
          Add flight
        </button>
      </form>
    </section>
  );
}
