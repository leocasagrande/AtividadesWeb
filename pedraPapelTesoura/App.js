import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const opcoes = ['Pedra', 'Papel', 'Tesoura'];

  const jogadaApp = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return opcoes[randomIndex];
  };

  const calcularResultado = (escolhaUser, escolhaComp) => {
    if (escolhaUser === escolhaComp) {
      return 'Empate!';
    }
    if (
      (escolhaUser === 'Pedra' && escolhaComp === 'Tesoura') ||
      (escolhaUser === 'Tesoura' && escolhaComp === 'Papel') ||
      (escolhaUser === 'Papel' && escolhaComp === 'Pedra')
    ) {
      return 'Você ganhou!';
    } else {
      return 'Você perdeu!';
    }
  };

  const jogar = (escolha) => {
    const escolhaComputador = jogadaApp();
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaComputador);
    setResultado(calcularResultado(escolha, escolhaComputador));
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel ou Tesoura</Text>

      <View style={styles.opcoesContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')}>
          <Image source={require('./assets/pedra.png')} style={styles.opcaoImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Papel')}>
          <Image source={require('./assets/papel.png')} style={styles.opcaoImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Tesoura')}>
          <Image source={require('./assets/tesoura.png')} style={styles.opcaoImage} />
        </TouchableOpacity>
      </View>

      {resultado ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultText}>Você escolheu: {escolhaUsuario}</Text>
          <Text style={styles.resultText}>Adversário escolheu: {escolhaApp}</Text>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      ) : null}

      <Button title="Jogar Novamente" onPress={reiniciarJogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  opcaoImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  resultadoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
});

export default App;