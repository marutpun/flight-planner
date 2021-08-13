import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/flight';

import { HeaderContainer } from './containers/header';
import { PlannerContainer } from './containers/planner';
import { NavContainer } from './containers/nav';
import { StatusContainer } from './containers/status';

export default function App() {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <NavContainer />
      <PlannerContainer />
      <StatusContainer />
    </Provider>
  );
}
