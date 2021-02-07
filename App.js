import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Signup from './src/assets/signup.png';
import Gambar from './src/assets/hero.png';

export default class App extends Component {
  render() {
    return (
      // <View>
      <ImageBackground source={Signup} style={styles.background}>
        <StatusBar barStyle="dark-content" backgroundColor="#f6edff" />
        <ScrollView>
          <View style={styles.containerGambar}>
            <Image source={Gambar} style={styles.gambar} />
          </View>
          <View>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.subTitle}>LakuDotKom</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.textSignUp}>SignUp</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Email" keyboardType='email-address' style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Repeat Password" secureTextEntry={true} style={styles.input} />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textBtn}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Already Account ?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  containerGambar: {
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gambar: {
    width: 350,
    height: 203
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f5f5f5',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f5f5',
    textAlign: 'center'
  },
  content: {
    marginHorizontal: 24
  },
  textSignUp: {
    fontSize: 20,
    marginTop: 6,
    marginBottom: 4,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
    borderRadius: 5,
    padding: 15,
    color: '#555',
    fontSize: 16,
    fontWeight: '900'
  },
  btn: {
    backgroundColor: '#3897fc',
    marginVertical: 15,
    borderRadius: 5,
    fontWeight: '900',
    padding: 18,
    alignItems: 'center'
  },
  textBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#fff',
  }
})
