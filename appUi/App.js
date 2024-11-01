import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} style={styles.headerButton}>
            <Image source={require('./assets/twitter.png')} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.body}>
        <View style={styles.control}>
          <TouchableOpacity style={[styles.controlButton, styles.topLeftButton]}>
            <Image source={require('./assets/facebook-messenger.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.controlButton, styles.topRightButton]}>
            <Image source={require('./assets/discord.png')} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.controlButton, styles.bottomRightButton]}>
            <Image source={require('./assets/spotify.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.designSection}>
          <View style={styles.designCard}>
            <Image source={require('./assets/spotify.png')} style={styles.icon} />
          </View>
          <View style={styles.designCard}>
            <Image source={require('./assets/facebook-messenger.png')} style={styles.icon} />
          </View>
          <View style={styles.designCard}>
            <Image source={require('./assets/discord.png')} style={styles.icon} />
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        {[...Array(4)].map((_, index) => (
          <TouchableOpacity key={index} style={styles.footerButton}>
            <Image source={require('./assets/github.png')} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  headerButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,  
    height: 24, 
    resizeMode: 'contain', 
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  control: {
    width: 250, 
    height: 250,
    borderRadius: 20, 
    backgroundColor: '#ddd',
    position: 'relative', 
    marginBottom: 20,
  },
  controlButton: {
    width: 100, 
    height: 40, 
    backgroundColor: '#bbb',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  topLeftButton: {
    top: 10,
    left: 10,
  },
  topRightButton: {
    top: 10,
    right: 10,
  },
  bottomRightButton: {
    bottom: 10,
    right: 10,
  },
  designSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  designCard: {
    width: 100,
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  footerButton: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
