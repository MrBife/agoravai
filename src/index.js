import React from 'react';
import { View } from 'react-native';

import { createRootNavigator, InitialFlow } from './routes';
import { isSignedIn } from './services/auth'

export default class App extends React.Component {
  state = {
    initialFlow: false,
    signedIn: false,
    signLoaded: false,
};

componentDidMount() {
  isSignedIn()
    .then(res => this.setState({ signedIn: res, signLoaded: true }))
    .catch(err => alert("Erro"));
}

  render() {
    const { initialFlow, signedIn, signLoaded } = this.state;

    if (!signLoaded) {
      return null;
    }
    const Layout =  createRootNavigator(initialFlow, signedIn);

    return <Layout />
  }
}