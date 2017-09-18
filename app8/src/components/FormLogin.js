import React from 'react';
import { Button, Image, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const bgImg = require('../imgs/bg.png');

const formLogin = props => (
    <Image style={{ flex: 1, width: null }} source={bgImg}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }} >WhatsApp Clone</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput
                    value={props.email} style={{ fontSize: 20, height: 45 }} placeholderTextColor='#fff'
                    placeholder='E-mail' onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput
                    secureTextEntry value={props.senha} style={{ fontSize: 20, height: 45 }} placeholderTextColor='#fff'
                    placeholder='Senha' onChangeText={texto => props.modificaSenha(texto)}
                />
                <TouchableHighlight onPress={() => Actions.formCadastro()}>
                    <Text style={{ fontSize: 18, color: '#fff' }} >Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 2 }}>
                <Button color='#115E54' title="Acessar" onPress={() => false} />
            </View>
        </View>
    </Image>
);

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
