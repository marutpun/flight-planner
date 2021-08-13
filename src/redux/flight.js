import { createStore } from 'redux';
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
      status: 'departed',
    },
    {
      id: 2,
      schedule: '00:10',
      to: 'chennai',
      flight: ['ix687'],
      terminal: 't2/02',
      gate: 'e5',
      status: 'departed',
    },
  ],
};

/**
 *
 * Reducer
 */
export default function flightReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}
export const store = createStore(
  flightReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
