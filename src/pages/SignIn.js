import { Alert, StatusBar } from 'react-native'
import React from "react";

import { onSignOut } from "../services/auth";
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
            onSignOut().then(() => navigation.navigate("SignedOut"));
        }}
    />
);