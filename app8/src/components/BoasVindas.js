import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgBoasVindas = require('../imgs/logo.png');
const bgImg = require('../imgs/bg.png');

export default props => (
    <Image style={{ flex: 1, width: null }} source={bgImg}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, color: '#ffffff' }}>Seja Bem-Vindo!</Text>
                <Image source={imgBoasVindas} />
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    color='#115E54'
                    title="Fazer Login"
                    onPress={() => Actions.formLogin()}
                />
            </View>
        </View>
    </Image>
);
