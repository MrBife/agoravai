import { Alert, StatusBar } from 'react-native'
import React from "react";

import {  Button, Icon } from 'react-native-elements'
import { Onboarding } from 'react-native-onboarding-swiper'
import { onAuthTrue } from './../services/flow'

export default ({ navigation }) => (
    <Button
        title="Get Started"
        containerViewStyle={{ marginTop: 20 }}
        backgroundColor="white"
        borderRadius={5}
        textStyle={{ color: '#003c8f' }}
        onPress={() => {
            onAuthTrue().then(() => navigation.navigate("SignedIn")).catch(() => alert("Erro"));
        }}
    />
);