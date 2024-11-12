import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";


const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About', {name: "Leonardo", email: "leonardocasagrande@gmail.com"})} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });