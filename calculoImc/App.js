import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setResultadoIMC('Por favor, insira valores válidos!');
      setClassificacao('');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultadoIMC(imc.toFixed(2));

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao('Obesidade');
    } else {
      setClassificacao('Obesidade grave');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Image source={require('./assets/scale.jpg')} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      {resultadoIMC ? (
        <View style={styles.result}>
          <Text style={styles.resultText}>IMC: {resultadoIMC}</Text>
          <Text style={styles.resultText}>Classificação: {classificacao}</Text>
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
    backgroundColor: '#f0f0f0',
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
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default App;