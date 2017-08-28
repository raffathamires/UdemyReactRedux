//Imports
import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    //tamanho da fonte
    fontSize: 30,

    //alinhando o texto
    //auto/center/left/right
    textAlign: 'center',

    //colocar linha abaixo (underline), linha em cima do texto (line-through)
    textDecorationLine: 'underline',

    //cor do texto
    color: '#fff',
    
    //cor de fundo
    backgroundColor: '#9FE08B',

    //estilos de fonte ('italic')
    //fontStyle: 'italic',
    fontWeight: 'bold',
    //fontWeight: '600', (valor de 100 a 900)
    
    //espaçamento interno
    //paddingTop/PaddingBotton/paddingRight/paddingLeft/paddingHorizontal/paddingVertical
    //padding: 50,
        
    //espaçamento externo
    //margin/marginTop/marginBotton/marginRight/marginLeft/marginHorizontal/marginVertical
    marginTop: 10,
    
    //altura e largura
    //height: 50,
    //width: 150

    /*aplicando sombras no iOS
    shadowColor: '#000',
    shadowOffset: {widht: -10, height: 15},
    shadowOpacity: 0.5,
    shadowRadius: 10*/

    //aplicando sombras no Android
    elevation: 5
  }
};

//Criar componentes
const App = () => {
  return (
    <View>
      <Text style={Estilos.estiloTexto}>Frases do Dia</Text>
    </View>
  );
};

//renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);