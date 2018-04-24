import { AsyncStorage } from 'react-native';

export const FLOW_KEY = "@RocketSeat:flow";

export const onAuthTrue = () => AsyncStorage.setItem(FLOW_KEY, "true");

export const isAuthTrue = async () => {
  const flow = await AsyncStorage.getItem(FLOW_KEY);

  return (flow !== null) ? true : false;
};