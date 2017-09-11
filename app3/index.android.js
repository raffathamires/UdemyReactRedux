import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaDoUsuario: '', escolhaComputador: '', resultado: '' }
  }

  jokenPo(escolhaUsuarioParametro) {
    //gera numero aleatorio (0,1,2)
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 3);

    var escolhaFinalComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaFinalComputador = 'PEDRA'; break;
      case 1: escolhaFinalComputador = 'PAPEL'; break;
      case 2: escolhaFinalComputador = 'TESOURA'; break;
    }

    var resultadoFinal = '';

    if (escolhaFinalComputador == 'PEDRA') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoFinal = 'EMPATE';
      }
      if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoFinal = 'VOCÊ GANHOU!';
      }
      if (escolhaUsuarioParametro == 'TESOURA') {
        resultadoFinal = 'COMPUTADOR GANHOU';
      }
    }

    if (escolhaFinalComputador == 'PAPEL') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoFinal = 'COMPUTADOR GANHOU';
      }
      if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoFinal = 'EMPATE';
      }
      if (escolhaUsuarioParametro == 'TESOURA') {
        resultadoFinal = 'VOCÊ GANHOU!';
      }
    }

    if (escolhaFinalComputador == 'TESOURA') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoFinal = 'VOCÊ GANHOU!';
      }
      if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoFinal = 'COMPUTADOR GANHOU';
      }
      if (escolhaUsuarioParametro == 'TESOURA') {
        resultadoFinal = 'EMPATE';
      }
    }

    this.setState({
      escolhaDoUsuario: escolhaUsuarioParametro,
      escolhaComputador: escolhaFinalComputador,
      resultado: resultadoFinal
    })


  }

  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenPo('PEDRA') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenPo('PAPEL') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenPo('TESOURA') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado}  </Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
            <Icone escolha={this.state.escolhaDoUsuario} jogador='Usuario'></Icone>
        </View>

      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    );
  }
}

class Icone extends Component{
  render(){
    if(this.props.escolha == 'PEDRA'){

    } else if(this.props.escolha == 'PAPEL') {

    } else if(this.props.escolha == 'TESOURA') {

    } else {
      return false;
    }

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
