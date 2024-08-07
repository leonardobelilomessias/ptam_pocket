import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function identifyBuilding(){
    const [text, setText] = useState('');
 return(
    <View style={styles.container}>
    <Text style={{fontSize:24, fontWeight:"700"}}>Descrição do Imovel</Text>
    <Text style={{fontSize:12, marginVertical:8}}>
    Anexar qualquer documento que possa identificar a origem do
imóvel ou melhor identificação do imóvel;

O imóvel deve ser descrito minuciosamente com todas as suas
características, dimensões, medidas, confrontações, áreas, frações
ideais, padrão construtivo, aspectos tecnológicos, estado de
conservação e todas as informações relevantes para formação do
conceito de valor de imóvel;</Text>
    <TextInput
      style={styles.textArea}
      multiline={true}
      numberOfLines={20}
      placeholder="Digite seu texto aqui"
      value={text}
      onChangeText={setText}
    />
                <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12}} onPress={()=>router.push('/metodology')}>
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