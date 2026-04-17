import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <Image
        source={require('@/assets/images/senailogo.png')} 
        style={styles.logo}
      />

      <Text style={styles.texto}>
        Bem-vindo ao Senai!
      </Text>

      <Pressable 
        style={styles.botao}
        onPress={() => router.push('/sobre')}
      >
        <Text style={styles.botaoTexto}>Sobre</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#1e73e8',
    padding: 10,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
  },
});