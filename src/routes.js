import React from 'react';
import { StackNavigator } from 'react-navigation';

import initialFlowPage from './pages/initialFlow'
import SignInPage from './pages/SignIn'
import SignOutPage from './pages/SignOut'

export const InitialFlow = StackNavigator({
  initialFlow: {
    screen: initialFlowPage
  },
});

export const SignIn = StackNavigator({
  SignIn: {
    screen: SignInPage
  },
});

export const SignOut = StackNavigator({
  SignOut: {
    screen: SignOutPage
  },
});

export const createRootNavigator = (initialFlow = false, SignIn) => {

  return StackNavigator({

    initialFlow: { screen: InitialFlow},
    SignedIn: { screen:  SignIn},
    SignedOut: { screen: SignOut},

  },

  {

    initialRouteName: initialFlow ? "InitialFlow" : (signedIn ? "SignedIn"  : "SignedOut"),

  });

};