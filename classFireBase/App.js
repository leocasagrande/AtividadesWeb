import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


import { db } from "./firebaseConfig";
import { getDoc, doc, onSnapshot, collection } from "firebase/firestore";
import { useEffect } from 'react';

export default function App() {

  const [name, setName] = useState("Loading...");

  useEffect(() => {
    async function loadData(){
      onSnapshot(doc(db, "users", "1"), (doc) => {
        setName(doc.data()?.name);
      })
    }


    loadData();
  }, []); 

  async function add() {
    await addDoc(collection(db, "users"), {
      name: "Barbara",
      profissao: "FrontEnd"
    })
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title="Add doc" onPress={add}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
