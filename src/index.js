import React from 'react';
import { View } from 'react-native';

import { createRootNavigator, InitialFlow } from './routes';

export default class App extends React.Component {
  state = {
    initialFlow : true
  };

  render() {
    const { initialFlow } = this.state;

    if (!initialFlow) {
      return null;
    }
    const Layout =  createRootNavigator(initialFlow, false);
    return <Layout />
  } 
}