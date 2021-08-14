import { createStore } from 'redux';
import { nanoid as generateId } from 'nanoid';

/**
 * Action constants
 */

export const ADD_FLIGHT = 'ADD_FLIGHT';

/**
 *
 * Initial State
 */
const initialState = {
  flight: [
    {
      id: 1,
      schedule: '00:05',
      to: 'perth',
      flight: ['sq225', 'lx4760', 'tk9316', 'va5507', 'vs7225'],
      terminal: 't3/03',
      gate: 'a16',
      status: 0,
    },
    {
      id: 2,
      schedule: '00:10',
      to: 'chennai',
      flight: ['ix687'],
      terminal: 't2/02',
      gate: 'e5',
      status: 1,
    },
  ],
};

/**
 *
 * Reducer
 */
export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FLIGHT':
      const newFlight = {
        ...action.payload,
        id: generateId(),
        flight: action.payload.flight.split(','),
        //status: ParseInt(action.payload.status),
      };

      //
      return Object.assign({}, state, {
        flight: [...state.flight, newFlight],
      });

    default:
      return state;
  }
}
export const store = createStore(
  flightReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * Action Creator
 */
export function addFlight(newFlight) {
  return { type: ADD_FLIGHT, payload: newFlight };
}
