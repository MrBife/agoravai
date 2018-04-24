import React from 'react';
import { View } from 'react-native';

import { createRootNavigator, InitialFlow } from './routes';
import { isSignedIn } from './services/auth'
import { isAuthTrue } from './services/flow'

export default class App extends React.Component {
  state = {
    initialFlow: false,
    signedIn: false,
    signLoaded: false,
};

async componentDidMount() {
  try {
      const signedIn = await isSignedIn();
      const initialFlow = await isAuthTrue();
      this.setState({ signedIn, signLoaded: true });
  } catch (e) {
      alert("Erro");
  }
}

  render() {
    const { initialFlow, signedIn, signLoaded } = this.state;

    if (!signLoaded) {
      return null;
    }
    const Layout =  createRootNavigator(!initialFlow, signedIn);

    return <Layout />
  }
}