import React from 'react';
import { StackNavigator } from 'react-navigation';

import initialFlow from './pages/initialFlow'

export const InitialFlow = StackNavigator({
  InitialFlow: {
    screen: initialFlow
  },
});

export const createRootNavigator = (initialFlow = false, signedIn = false) => {
  return StackNavigator({
    InitialFlow: { screen: InitialFlow}
  },
  {
    initialRouteName: initialFlow ? "InitialFlow" : (signedIn ? "SignedIn"  : "SignedOut"),
  });
};