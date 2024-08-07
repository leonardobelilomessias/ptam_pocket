import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ClienteData(){
    return(
        <View style={{backgroundColor:"white", flex:1, padding:12}}>
            <Text style={{textAlign:"center", fontSize:24, fontWeight:'700', marginVertical:12}}>Inormaçoes do cliente</Text>
            <TextInput style={styles.input}  placeholder="Nome"/>
            <TextInput style={styles.input}  placeholder="CPF/CNPJ"/>
            <TextInput style={styles.input}  placeholder="Endereço"/>
            <TextInput style={styles.input}  placeholder="Profissão"/>
            <TextInput style={styles.input}  placeholder="Estado Civil"/>
            <TextInput style={styles.input}  placeholder="Telefone"/>

            <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12}} onPress={()=>router.push('/goal')}>
                <Text style={{color:"white", textAlign:"center", fontSize:18}}>Próximo</Text>
            </Pressable>




        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:12,
        backgroundColor:colors.grayInput, 
        fontSize:18,
        borderRadius:12,
        marginBottom:12
    }
})