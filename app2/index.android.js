//Imports
import React from 'react';
import { Text, View, AppRegistry, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    backgroundColor: '#fff',
    flex: 1, //1:1
    justifyContent: 'center',
    alignItems: 'center'
  },
  estiloTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderColor: '#111',
    borderWidth: 3,
    borderRadius: 8
  }
};

const gerarNovaFrase = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 6);

  //frases
  var frases = Array();
  frases[0] = 'Estou sempre alegre. Essa é a melhor maneira';
  frases[1] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo.';
  frases[2] = 'Se você encontrar um caminho sem obstáculos,';
  frases[3] = 'Não existe um caminho para a felicidade. A felicidade é o caminho';
  frases[4] = 'Blablabla whiskas sachê badumtss';
  frases[5] = 'Você nunca sabe a força que tem. Até que a ';

  Alert.alert(frases[numero_aleatorio]);
}

//Criar componentes
const App = () => {
  const { principal, botao, estiloTexto } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')}/>
      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={estiloTexto}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);