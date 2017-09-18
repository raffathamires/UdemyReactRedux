import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const bgImg = require('../imgs/bg.png');

const formCadastro = props => (
    <Image style={{ flex: 1, width: null }} source={bgImg}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }} >Crie sua conta</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput
                    value={props.nome} style={{ fontSize: 20, height: 45 }} placeholderTextColor='#fff'
                    placeholder='Nome' onChangeText={texto => props.modificaNome(texto)}
                />
                <TextInput
                    value={props.email} style={{ fontSize: 20, height: 45 }} placeholderTextColor='#fff'
                    placeholder='E-mail' onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput
                    secureTextEntry value={props.senha} style={{ fontSize: 20, height: 45 }} placeholderTextColor='#fff'
                    placeholder='Senha' onChangeText={texto => props.modificaSenha(texto)}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Button color='#115E54' title="Cadastrar" onPress={() => false} />
            </View>
        </View>
    </Image>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
