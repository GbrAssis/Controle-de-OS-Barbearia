import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class CriarConta extends Component {

  handleCreateAccount = () => {
    console.log("Conta criada!");
    this.props.onNavigateBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Criar Conta</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Nome completo" 
          placeholderTextColor="#888" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Telefone" 
          placeholderTextColor="#888"
          keyboardType="numeric" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          placeholderTextColor="#888" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#888" 
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCreateAccount}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={this.props.onNavigateBack}>
          Voltar
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
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#3f3f3f',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
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
    fontSize: 30,
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

export default CriarConta;
