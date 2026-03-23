import React, { useRef, useEffect } from 'react';
// Importa hooks do React:
// useRef → guarda valores que não resetam a cada render
// useEffect → executa algo quando o componente carrega

import { View, StyleSheet, Animated } from 'react-native';
// View → container (tipo uma div)
// StyleSheet → organização de estilos
// Animated → API de animações do React Native

export default function App() {

  // Cria um valor animado começando em 1 (visível)
  const opacity = useRef(new Animated.Value(1)).current;

  // useEffect roda quando o componente aparece na tela
  useEffect(() => {

    // Animated.loop → repete a animação infinitamente
    Animated.loop(

      // Animated.sequence → executa animações em ordem
      Animated.sequence([

        // Primeira animação: desaparecer (opacity 1 → 0)
        Animated.timing(opacity, {
          toValue: 0,           // valor final (invisível)
          duration: 500,        // tempo da animação (ms)
          useNativeDriver: true // melhora performance
        }),

        // Segunda animação: aparecer (opacity 0 → 1)
        Animated.timing(opacity, {
          toValue: 1,           // valor final (visível)
          duration: 500,
          useNativeDriver: true
        }),

      ])

    ).start(); // inicia a animação

  }, []); // [] = roda só uma vez ao iniciar

  return (
    <View style={styles.container}>
      {/* Animated.Text permite aplicar animação no texto */}
      <Animated.Text
        style={[
          styles.texto,
          { opacity: opacity } // aplica a opacidade animada
        ]}
      >
        PostBoard
      </Animated.Text>
    </View>
  );
}

// Estilos do app
const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa toda a tela
    alignItems: 'center',    // centraliza horizontalmente
    justifyContent: 'center' // centraliza verticalmente
  },
  texto: {
    fontSize: 28,            // tamanho do texto
    fontWeight: 'bold',      // negrito
  }
});