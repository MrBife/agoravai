import React from 'react';
import { View } from 'react-native';

import { createRootNavigator, InitialFlow } from './routes';

export default class App extends React.Component {
  state = {
    initialFlow : true,
    SignIn : true,
    SignOut : true
  };

  render() {
    const { initialFlow } = this.state;
    const { SignIn } = this.state;
    const { SignOut } = this.state;

    if (!initialFlow) {
      return null;
    }
    const Layout =  createRootNavigator(initialFlow, false);
    return <Layout />
  }
}