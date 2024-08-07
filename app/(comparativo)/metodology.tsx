import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function metodology(){
    const [text, setText] = useState('');
 return(
    <View style={styles.container}>
    <Text style={{fontSize:24, fontWeight:"700"}}>Metodologia</Text>
    <Text style={{marginVertical:8}}>O solicitante da avaliação é quem determina sua finalidade.</Text>
    <TextInput
      style={styles.textArea}
      multiline={true}
      numberOfLines={20}
      placeholder="Digite seu texto aqui"
      value={text}
      onChangeText={setText}
    />
                <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12}} onPress={()=>router.push('/vistory')}>
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