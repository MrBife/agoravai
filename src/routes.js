import React from 'react';
import { StackNavigator } from 'react-navigation';

import initialFlow from './pages/initialFlow'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'

export const InitialFlow = StackNavigator({
  InitialFlow: {
    screen: initialFlow
  },
  SignIn: {
    screen: SignIn
  },
  SignOut: {
    screen: SignOut
  },
});

export const createRootNavigator = (initialFlow = false) => {
  return StackNavigator({
    InitialFlow: { screen: InitialFlow}
  },
  {
    initialRouteName: initialFlow ? "InitialFlow" : (signedIn ? "SignedIn"  : "SignedOut"),
  });
};