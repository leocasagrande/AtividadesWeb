import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import frases from './frases.json'; // Importando o arquivo JSON

const App = () => {
  const [citacao, setCitacao] = useState({});

  // Função para gerar uma nova citação aleatória
  const obterCitacaoAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    setCitacao(frases[indiceAleatorio]);
  };

  // Gera uma citação aleatória ao iniciar o aplicativo
  useEffect(() => {
    obterCitacaoAleatoria();
  }, []);

  return (
    <View style={styles.container}>
      {citacao.image && <Image source={{ uri: citacao.image }} style={styles.imagem} />}
      <Text style={styles.citacao}>"{citacao.quote}"</Text>
      <Text style={styles.autor}>{citacao.author}</Text>
      <View style={styles.botao}>
        <Button title="Nova Citação" onPress={obterCitacaoAleatoria} color={'black'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#808080',
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  citacao: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  autor: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    marginTop: 20,
  }
});

export default App;