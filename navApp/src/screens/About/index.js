import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>About</Text>
            <Button title="Go to Home" onPress={() => navigation.goBack()} />
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });