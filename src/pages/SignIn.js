import { Alert, StatusBar } from 'react-native'
import React from "react";

import {  Button, Icon } from 'react-native-elements'
import { Onboarding } from 'react-native-onboarding-swiper'

export default ({ navigation }) => (
    <Button
        title="SignIn"
        containerViewStyle={{ marginTop: 20 }}
        backgroundColor="white"
        borderRadius={5}
        textStyle={{ color: '#003c8f' }}
        onPress={() => {
            navigation.navigate("SignOut"));
        }}
    />
);