import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [cronometro, setCronometro] = useState(0);
  const [estaRodando, setEstaRodando] = useState(false);
  const intervaloRef = useRef(null);

  const iniciarCronometro = () => {
    if (!estaRodando) {
      setEstaRodando(true);
      const tempoInicio = Date.now() - cronometro;
      intervaloRef.current = setInterval(() => {
        setCronometro(Date.now() - tempoInicio);
      }, 10); // Atualiza a cada 10ms o cronometro
    }
  };

  const pausarCronometro = () => {
    if (estaRodando) {
      clearInterval(intervaloRef.current);
      setEstaRodando(false);
    }
  };

  const reiniciarCronometro = () => {
    clearInterval(intervaloRef.current);
    setCronometro(0);
    setEstaRodando(false);
  };

  const formatarTempo = (tempo) => {
    const milissegundos = Math.floor((tempo % 1000) / 10);
    const segundos = Math.floor((tempo / 1000) % 60);
    const minutos = Math.floor((tempo / 1000 / 60) % 60);
    return `${minutos < 10 ? `0${minutos}` : minutos}:${
      segundos < 10 ? `0${segundos}` : segundos
    }:${milissegundos < 10 ? `0${milissegundos}` : milissegundos}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cronometro}>Cronômetro</Text>
      <Text style={styles.cronometro}>{formatarTempo(cronometro)}</Text>
      <View style={styles.botoesContainer}>
        <Button title="Iniciar" onPress={iniciarCronometro} />
        <Button title="Pausar" onPress={pausarCronometro} />
        <Button title="Reiniciar" onPress={reiniciarCronometro} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cronometro: {
    borderEndColor: "red",
    fontSize: 48,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  }
});