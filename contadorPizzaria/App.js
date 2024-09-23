import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const App = () => {
  // Estado para armazenar o número de pessoas
  const [contagem, setContagem] = useState(0);

  // Função para incrementar a contagem
  const incrementar = () => {
    setContagem(contagem + 1);
  };

  // Função para decrementar a contagem
  const decrementar = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de clientes</Text>
      <Text style={styles.contagem}>Número de pessoas no restaurante: {contagem}</Text>
      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao} onPress={incrementar}>
          <Text style={styles.texto}>Entrou</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={decrementar}>
          <Text style={styles.texto}>Saiu</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  contagem: {
    fontSize: 20,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#f0f0f0',
  },
  texto: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default App;