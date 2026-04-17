import { useEffect, useState } from 'react';
import { View } from 'react-native';

export default function App() {
  useEffect(() => {
    buscarPokemons()
  }, [])

  async function buscarPokemons() {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    const data = await resposta.json();
    console.log(data)
  }
  return(
    <View>

    </View>
  )
} 