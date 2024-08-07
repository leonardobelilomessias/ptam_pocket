import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function identifyBuilding(){
    const [text, setText] = useState('');
 return(
    <View style={styles.container}>
    <Text style={{fontSize:24, fontWeight:"700"}}>Identificação do Imovel</Text>
    <Text style={{fontSize:12}}>
Transcrever o imóvel tal qual existente na Matricula (Registro de
Imóveis – Certidão – Certidão de Inteiro Teor), incluindo-se o nº da
Matrícula e a qual registro de imóveis está circunscrito;

A matrícula do imóvel deve estar atualizada;

Citar qualquer gravame (Hipoteca, alienação, penhora, arresto,
tombamento, indisponibilidade, usufruto...)

Em caso de imóveis sem matrícula, ou a benfeitoria, ou parte dela, não
estiverem averbados, procede-se normalmente informando a situação;</Text>
    <TextInput
      style={styles.textArea}
      multiline={true}
      numberOfLines={20}
      placeholder="Digite seu texto aqui"
      value={text}
      onChangeText={setText}
    />
                <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12}} onPress={()=>router.push('/descriptionBuilding')}>
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