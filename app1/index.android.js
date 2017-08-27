import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  //random gera inicialmente numero aleatorio entrei 0 e 1
  var numero_aleatorio = Math.random();
  //retornar valor inteiro entre 0 e 10
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

// cria uma constante, variável de valor fixo
const App = () => {

  return  (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);