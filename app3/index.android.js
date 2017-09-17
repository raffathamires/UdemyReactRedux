import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaDoUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenPo(escolhaUsuarioParametro) {
    //gera numero aleatorio (0,1,2)
    const numeroAleatorio = Math.floor(Math.random() * 3);

    let escolhaFinalComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaFinalComputador = 'PEDRA'; break;
      case 1: escolhaFinalComputador = 'PAPEL'; break;
      case 2: escolhaFinalComputador = 'TESOURA'; break;
      default: escolhaFinalComputador = '';
    }

    let resultadoFinal = '';

    if (escolhaFinalComputador === 'PEDRA') {
      if (escolhaUsuarioParametro === 'PEDRA') {
        resultadoFinal = 'EMPATE';
      }
      if (escolhaUsuarioParametro === 'PAPEL') {
        resultadoFinal = 'VOCÊ GANHOU! :D';
      }
      if (escolhaUsuarioParametro === 'TESOURA') {
        resultadoFinal = 'VOCÊ PERDEU! :(';
      }
    }

    if (escolhaFinalComputador === 'PAPEL') {
      if (escolhaUsuarioParametro === 'PEDRA') {
        resultadoFinal = 'VOCÊ PERDEU! :(';
      }
      if (escolhaUsuarioParametro === 'PAPEL') {
        resultadoFinal = 'EMPATE';
      }
      if (escolhaUsuarioParametro === 'TESOURA') {
        resultadoFinal = 'VOCÊ GANHOU! :D';
      }
    }

    if (escolhaFinalComputador === 'TESOURA') {
      if (escolhaUsuarioParametro === 'PEDRA') {
        resultadoFinal = 'VOCÊ GANHOU! :D';
      }
      if (escolhaUsuarioParametro === 'PAPEL') {
        resultadoFinal = 'VOCÊ PERDEU! :(';
      }
      if (escolhaUsuarioParametro === 'TESOURA') {
        resultadoFinal = 'EMPATE';
      }
    }

    this.setState({
      escolhaDoUsuario: escolhaUsuarioParametro,
      escolhaComputador: escolhaFinalComputador,
      resultado: resultadoFinal
    });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenPo('PEDRA'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenPo('PAPEL'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenPo('TESOURA'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado} </Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaDoUsuario} jogador='Você' />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
