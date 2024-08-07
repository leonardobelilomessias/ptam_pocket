import { colors } from '@/theme/colors';
import { FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, Button, Pressable } from 'react-native';
import AnalyseMarket from './analyseMarket';
import Calcule from './calcule';



export default function HomeScreen() {
  return (
   <>
   <Calcule/>
   </>
  );
}

function Home(){
  return(
    <View style={{padding:18, backgroundColor:"white", flex:1}}>
    <Text style={{fontSize:24, fontWeight:"700"}}>Passos Para criação do Ptam</Text>
    <Text>Solicitante</Text>
    <Text>Objetivo do parece</Text>
    <Text>Identificação do imóvel</Text>
    <Text>Descrição do Imóvel</Text>
    <Text>Metodologia Avaliatoria</Text>
    <Text>Vistoria do Imóvel</Text>
    <Text>Analise do mercado para o imovel avaliado</Text>
    <Text>Pesquisa de mercado</Text>
    <Text>Homogenização das amostras</Text>
    <Text>Tratamento matematicos das amostras</Text>
    <Text>Determinação de valor</Text>
    <Text>Conclusão</Text>
    <Text>Encerramento</Text>
    <Text>Anexos</Text>

  
  <View style={{padding:18, borderBlockColor:'black', borderWidth:1, borderRadius:12}}>
    <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:8}}>
    <Text style={{fontWeight:600}}>None mo imovel</Text>
    <Text style={{fontWeight:600}}>R$460,900</Text>
    </View>
    <View style={{flexDirection:'row', }}>
      <Ionicons name="bed-sharp" size={18} color="black" />
      <Text style={{fontWeight:600, marginRight:12}}>2</Text>
      <FontAwesome name="bath" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
      <MaterialIcons name="garage" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
      <FontAwesome6 name="ruler-combined" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
    </View>
    
  </View>

    <Pressable style={{backgroundColor:"blue",  padding:12, borderRadius:12, marginVertical:32}} onPress={()=>router.push('/clienteData')}>
              <Text style={{color:"white", textAlign:"center", fontSize:18}}>Iniciar</Text>
          </Pressable>

    <Pressable style={{backgroundColor:"blue",  padding:12, borderRadius:12, marginVertical:32}} onPress={()=>router.push('/analyseMarket')}>
              <Text style={{color:"white", textAlign:"center", fontSize:18}}>Goto </Text>
          </Pressable>
  </View>
  )
}

function Amostre(){
  return(<>
    <View style={{padding:18, borderBlockColor:'black', borderWidth:1, borderRadius:12}}>
    <View style={{flexDirection:'row',justifyContent:"space-between",marginBottom:8}}>
    <Text style={{fontWeight:600}}>None mo imovel</Text>
    <Text style={{fontWeight:600}}>R$460,900</Text>
    </View>
    <View style={{flexDirection:'row', }}>
      <Ionicons name="bed-sharp" size={18} color="black" />
      <Text style={{fontWeight:600, marginRight:12}}>2</Text>
      <FontAwesome name="bath" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
      <MaterialIcons name="garage" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
      <FontAwesome6 name="ruler-combined" size={18} color="black" />
      <Text style={{fontWeight:600,marginRight:12}}>2</Text>
    </View>
    
  </View>
  </>)
}