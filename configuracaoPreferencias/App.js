import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Button, StyleSheet, Modal, FlatList } from 'react-native';
import Slider from '@react-native-community/slider';

export default function PreferenciasUsuario() {
  // Estados
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);
  const [modalVisivel, setModalVisivel] = useState(false);

  const temas = ['Claro', 'Escuro'];

  // Função para resetar preferências
  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  // Renderiza a lista de temas no Modal
  const renderizarOpcaoTema = ({ item }) => (
    <TouchableOpacity
      style={styles.opcaoTema}
      onPress={() => {
        setTema(item);
        setModalVisivel(false);
      }}
    >
      <Text style={styles.textoOpcao}>{item}</Text>
    </TouchableOpacity>
  );

  // Definir cores dinâmicas baseadas no tema e modo noturno
  const cores = {
    fundo: modoNoturno || tema === 'Escuro' ? '#333' : '#fff',
    texto: modoNoturno || tema === 'Escuro' ? '#fff' : '#000'
  };

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto, fontSize: tamanhoFonte }]}>
        Configurações de Preferências
      </Text>
      
      <Text style={[styles.rotulo, { color: cores.texto }]}>Tema:</Text>
      <TouchableOpacity
        style={styles.botaoTema}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={[styles.textoBotao, { color: cores.texto }]}>{tema}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisivel}
        animationType="slide"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTitulo}>Selecione o Tema</Text>
            <FlatList
              data={temas}
              renderItem={renderizarOpcaoTema}
              keyExtractor={(item) => item}
            />
            <Button title="Cancelar" onPress={() => setModalVisivel(false)} />
          </View>
        </View>
      </Modal>

      <Text style={[styles.rotulo, { color: cores.texto }]}>
        Tamanho da Fonte: {tamanhoFonte}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)} // Altera dinamicamente o tamanho da fonte
      />

      <View style={styles.containerSwitch}>
        <Text style={[styles.rotulo, { color: cores.texto }]}>
          Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
        </Text>
        <Switch
          value={modoNoturno}
          onValueChange={(value) => setModoNoturno(value)} // Altera dinamicamente as cores com base no modo noturno
        />
      </View>

      <Button title="Resetar Preferências" onPress={resetarPreferencias} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  rotulo: {
    fontSize: 16,
    marginTop: 20,
  },
  botaoTema: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    fontSize: 16,
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  containerSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalConteudo: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  opcaoTema: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    width: 200,
  },
  textoOpcao: {
    fontSize: 16,
    textAlign: 'center',
  },
});