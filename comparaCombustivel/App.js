import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularCombustivel = () => {
    const alcoolNum = parseFloat(precoAlcool);
    const gasolinaNum = parseFloat(precoGasolina);

    if (!alcoolNum || !gasolinaNum) {
      setResultado('Por favor, insira valores válidos!');
      return;
    }

    const proporcao = alcoolNum / gasolinaNum;

    if (proporcao <= 0.7) {
      setResultado('Abasteça com Álcool');
    } else {
      setResultado('Abasteça com Gasolina');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>

      <Image source={require('./assets/gasolina.png')} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$)"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />

      <Button title="Calcular" onPress={calcularCombustivel} />

      {resultado ? (
        <View style={styles.result}>
          <Text style={styles.resultText}>{resultado}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default App;