import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
export default function App() {
  const testarAlerta = () => {
    Alert.alert(
      'Funcionou!',
      'O projeto está pronto para começar.',
      [{ text: 'OK' }]
    );
  };

  const verDocumentacao = () => {
    Alert.alert(
      'API disponível',
      'https://jsonplaceholder.typicode.com',
      [{ text: 'OK' }]
    );
  };
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>PostBoard</Text>
      <Text style={styles.subtitulo}> Pedro A. e G.</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={testarAlerta}
      >
        <Text style={styles.textoBotao}>Testar alerta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 16 }]}
        onPress={verDocumentacao}
      >
        <Text style={styles.textoBotao}>Ver documentação</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3a5f', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#1a56db',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});