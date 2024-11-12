import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";

const About = ({navigation}) => {
    const route = useRoute();
    return(
        <View style={styles.container}>
            <Text>About</Text>
            <Button title="Go to Home" onPress={() => navigation.goBack()} />
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
            <Text>Name: {route.params.name}</Text>
            <Text>Name: {route.params.email}</Text>
            {console.log(route)}
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