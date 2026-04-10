import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/globalStyles';

export default function Index() {
    return (
        <View style={estilos.container}>
            <Text>Página Inicial</Text>
            <Link href="/detalhes">Detalhes</Link>
        </View>
    )
}

