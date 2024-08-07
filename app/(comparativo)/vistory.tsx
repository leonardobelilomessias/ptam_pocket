import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function vistory(){
    const [text, setText] = useState('');
 return(
    <View style={styles.container}>
    <Text style={{fontSize:24, fontWeight:"700"}}>Vistoria do Imovel</Text>
    <Text style={{marginVertical:8}}>
        caracterizar o imóvel e
compara-lo com os imóveis já avaliados e os que serão
posteriormente pesquisados.

Obrigatório que conste a data e o turno em que foi realizada a
vistoria. Se eventualmente a vistoria foi acompanhada por
qualquer pessoa que seja, recomenda-se a identificação e menção
da mesma no PTAM.</Text>
    <TextInput
      style={styles.textArea}
      multiline={true}
      numberOfLines={20}
      placeholder="Digite seu texto aqui"
      value={text}
      onChangeText={setText}
    />
                <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12}} onPress={()=>router.push('/analyseMarket')}>
                <Text style={{color:"white", textAlign:"center", fontSize:18}}>Próximo</Text>
            </Pressable>
  </View>
 )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor:'white'
    },
    textArea: {
      height: 300,
      width: '100%',
      borderColor: 'blue',
      borderWidth: 1,
      padding: 10,
      textAlignVertical: 'top',
      marginBottom:8, 
      borderRadius:12
    },
  });