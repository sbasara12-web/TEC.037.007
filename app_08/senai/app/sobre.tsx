import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.texto}>
        O SENAI (Serviço Nacional de Aprendizagem Industrial) é reconhecido como a maior rede privada de educação profissional 
        da América Latina, sendo referência na formação de profissionais qualificados para o setor industrial. Sua atuação é voltada 
        para o desenvolvimento de competências técnicas, incentivo à inovação e aplicação de tecnologias avançadas, contribuindo 
        diretamente para o crescimento da indústria.
      </Text>

      <Text style={styles.texto}>
        Fundado em 1942, o SENAI oferece uma ampla variedade de cursos, incluindo formação técnica, cursos superiores, 
        especializações e programas de iniciação profissional. A instituição se destaca pela alta taxa de empregabilidade
        de seus alunos, graças à forte conexão com o mercado de trabalho e às parcerias com empresas de diversos setores.
      </Text>

      <Text style={styles.texto}>
        Com presença em todo o território nacional, o SENAI desempenha um papel fundamental na capacitação de jovens e adultos,
        preparando-os para os desafios da Indústria 4.0, que envolve automação, digitalização e novas tecnologias. Além disso, 
        a instituição investe continuamente em infraestrutura moderna, laboratórios tecnológicos e metodologias de ensino inovadoras,
         garantindo uma formação prática e alinhada às demandas atuais da indústria.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
});