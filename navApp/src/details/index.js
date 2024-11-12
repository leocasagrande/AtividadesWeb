import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";


const Detail = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Detail</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to About" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });