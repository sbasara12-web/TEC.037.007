import {Text, View, StyleSheet} from 'react-native'

export default function Index() {
    return (
        <View style={estilo.container}>
        <Text>Hello</Text>
        <Text>Wolrd</Text>
        </View>
    )
}
const estilo = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})