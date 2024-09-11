import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CriarConta from './CriarConta';

class App extends Component {
  state = {
    showCreateAccount: false, 
  };


  render() {
    if (this.state.showCreateAccount) {
      return <CriarConta onNavigateBack={this.criarConta} />;
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FLOWBARBER</Text>
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          placeholderTextColor="#888" 
        />
        <TextInput 
          style={styles.input2} 
          placeholder="Senha" 
          placeholderTextColor="#888" 
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.link} >
          Criar conta
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f3f3f',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#3f3f3f',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  input2: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#3f3f3f',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ffe58f', 
    padding: 12,
    borderRadius: 20,
    borderColor: '#3f3f3f',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    marginBottom: 50,
    color: '#ffe58f',
  },
  link: {
    color: '#ffe58f', 
    textDecorationLine: 'underline', 
    marginTop: 10,
    textAlign: 'center',
  },
});

export default App;
