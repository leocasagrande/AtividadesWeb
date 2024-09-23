import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import fortunes from './fortunes.json'; // Importando o arquivo JSON

const App = () => {
  const [aberto, setAberto] = useState(false);
  const [frase, setFrase] = useState('');

  // Função para quebrar o biscoito e gerar uma frase de sorte
  const quebrarBiscoito = () => {
    const indiceAleatorio = Math.floor(Math.random() * fortunes.length);
    setFrase(fortunes[indiceAleatorio]);
    setAberto(true);
  };
  // Função para reiniciar o biscoito
  const reiniciarBiscoito = () => {
    setAberto(false);
    setFrase('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={quebrarBiscoito} style={styles.biscoitoContainer}>
        <Image
          source={aberto ? require('./assets/biscoitoAberto.jpg') : require('./assets/biscoitoFechado.jpg')}
          style={styles.biscoito}
        />
      </TouchableOpacity>
      {!aberto && (
        <Text style={styles.frase}>Clique no biscoito para quebrá-lo e descobrir sua sorte!</Text>// Avisa que o biscoito precisa ser quebrado
      )}
      {frase && <Text style={styles.frase}>"{frase}"</Text>}
      {aberto && (
        <View style={styles.botoesContainer}>
          <Button title="Reiniciar Biscoito" onPress={reiniciarBiscoito} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  biscoitoContainer: {
    marginBottom: 20,
  },
  biscoito: {
    width: 200,
    height: 200,
  },
  frase: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  botoesContainer: {
    marginTop: 40, 
  },
});

export default App;