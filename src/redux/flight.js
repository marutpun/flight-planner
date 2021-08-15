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
      id: generateId(),
      schedule: '00:05',
      to: 'perth',
      flight: ['sq225', 'lx4760', 'tk9316', 'va5507', 'vs7225'],
      terminal: 't3/03',
      gate: 'a16',
      status: 1,
    },
    {
      id: generateId(),
      schedule: '00:10',
      to: 'chennai',
      flight: ['ix687'],
      terminal: 't2/02',
      gate: 'e5',
      status: 2,
    },
    {
      id: generateId(),
      schedule: '00:10',
      to: 'seoul',
      flight: ['sq608', 'ac6305', 'oz6782', 'va5408'],
      terminal: 't1/04',
      gate: 'a18',
      status: 3,
    },
    {
      id: generateId(),
      schedule: '00:15',
      to: 'beijing',
      flight: ['ca970', 'sq5870'],
      terminal: 't1/04',
      gate: 'd37',
      status: 4,
    },
    {
      id: generateId(),
      schedule: '00:15',
      to: 'paris',
      flight: ['sq336', 'sk8046', 'va5674'],
      terminal: 't3/03',
      gate: 'a4',
      status: 4,
    },
    {
      id: generateId(),
      schedule: '00:20',
      to: 'cebu',
      flight: ['5j548'],
      terminal: 't2/08',
      gate: 'f32',
      status: 5,
    },
    {
      id: generateId(),
      schedule: '00:20',
      to: 'moscow (domodedovo)',
      flight: ['sq362'],
      terminal: 't3/03',
      gate: 'a12',
      status: 5,
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
        status: Number.parseInt(action.payload.status),
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
