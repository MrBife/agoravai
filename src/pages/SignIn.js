import { Alert, StatusBar, TextInput, View } from 'react-native'
import React from "react";

import { onSignOut } from "../services/auth";
import { Button, Icon } from 'react-native-elements'
import { Onboarding } from 'react-native-onboarding-swiper'

export default ({ navigation }) => (
    <View>
        <TextInput
            keyboardType="numeric"
            placeholder="Número da Comanda"
            blurOnSubmit={true}
        />
        <Button
            title="Deslogar"
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor="white"
            borderRadius={5}
            textStyle={{ color: '#003c8f' }}
            onPress={() => {
                onSignOut().then(() => navigation.navigate("Deslogado"));
        }}
    />
    </View>
);