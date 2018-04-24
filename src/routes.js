import React from 'react';
import { StackNavigator } from 'react-navigation';

import initialFlowPage from './pages/initialFlow'
import SignInPage from './pages/SignIn'
import SignOutPage from './pages/SignOut'

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

export const createRootNavigator = (initialFlow = false, signedIn) => {

  return StackNavigator({

    InitialFlow: { screen: initialFlowPage},
    Logado: { screen:  SignIn},
    Deslogado: { screen: SignOut},

  },

  {

    initialRouteName: initialFlow ? "InitialFlow" : (signedIn ? "Logado"  : "Deslogado"),
    headerMode: 'none',
  });

};