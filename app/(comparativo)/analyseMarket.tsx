import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Checkbox from "expo-checkbox";
import { InputCheck } from "@/components/InputCheck";
import { FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { EmptyComponent } from "@/components/EmptyComponet";

export default function AnalyseMarket(){
    const [elements,setElements] = useState<any[]>([]);
    const [showModal,setShowModal] = useState(false)
    const item:any[] = []
 return(
    <View style={styles.container} >
    <Text style={{fontSize:24, fontWeight:"700", textAlign:'center'}}>Analise de Mercado</Text>
    <Text style={{marginVertical:8}}>
        Adicione novas amostras</Text>
    <View style={{flex:1,alignItems:"center",  width:"100%", }}>
      <FlatList contentContainerStyle={{alignContent:"center", alignItems:"center",justifyContent:"center", width:300, }}  data={elements} ListEmptyComponent={()=>(
        <EmptyComponent/>
        )}
         renderItem={({item})=>(
          <CardExample bath={item?.bath as string} price={item?.price as string} rooms={item?.rooms as string} size={item?.size as string} title={item?.title as string} wage={item?.wage as string}     />
      )}/>

        <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12, marginVertical:24, width:'100%'}} onPress={()=>setShowModal(true)}>
                <Text style={{color:"white", textAlign:"center", fontSize:18}}>Nova Amostra</Text>
       </Pressable>
        <Pressable style={{backgroundColor:elements.length>0?"blue":"gray", padding:12, borderRadius:12, width:"100%"}} onPress={()=>router.push('/vistory')}>
                <Text style={{color:"white", textAlign:"center", fontSize:18}}>Próximo</Text>
       </Pressable>
       <ModalAdd elements={elements} setElement={setElements} setShowModal={setShowModal} show={showModal} />
    </View>    
  </View>
 )
}



  export function ModalAdd({show,setShowModal,setElement, elements}:{show:boolean,setShowModal:(value:boolean)=>void,elements:any[] ,setElement:React.Dispatch<React.SetStateAction<any[]>>}){
    const [title,setTitle] = useState('')
    const [source,setSource] = useState('')
    const [link,setLink] = useState('')
    const [neighborhood,setNeighborhood] = useState('')
    const [size,setSize] = useState('')
    const [price,setPrice] = useState('')
    const [rooms,setRooms] = useState('')
    const [bath,setBath] = useState('')
    const [wage,setWage] = useState('')
    const [commodities,setCommodities]=useState([{}])
    function handleModal(){
      console.log(title, price)
      setElement([...elements,{price,title,source,link,rooms,bath,wage,size}])
      console.log(elements)
      setShowModal(false)
    }
    function CancelModal(){
      setShowModal(false)
    }
    return(
      <Modal  visible={show} animationType="slide">
      <ScrollView style={{width:"100%", paddingHorizontal:24, }} contentContainerStyle={{paddingBottom:50}}>
        <Text style={{fontSize:24, fontWeight:'700', textAlign:"center"}}>Adicionar amostra</Text>
        <InputField value={title} setValue={setTitle} label="Titulo" placeholder="Digite o Titulo" />
        <InputField  value={source} setValue={setSource}  label="Fonte" placeholder="Digite a fonte"/>
        <InputField value={link} setValue={setLink} label="Link" placeholder="Digite o link da fonte"/>
        <InputField value={neighborhood} setValue={setNeighborhood} label="Bairro" placeholder="Digite bairro"/>
        <InputField value={size} setValue={setSize} label="Metragem" placeholder=" Digite Metragem em m2 "/>
        <InputField value={price} setValue={setPrice} label="Preço" placeholder=" Digite o preço do imóvel"/>
        <InputAmount setValue={setRooms} label="Quartos"/>
        <InputAmount setValue={setBath} label="Banheiros"/>
        <InputAmount setValue={setWage} label="Vagas de garagem"/>
        
        <InputCheck />

      </ScrollView>
      <View style={{paddingHorizontal:24, paddingBottom:12}}>
        
        <Pressable style={{backgroundColor:"blue", padding:12, borderRadius:12, marginVertical:24}} onPress={()=>handleModal()}>
                <Text style={{color:"white", textAlign:"center", fontSize:18}}>Adicionar Nova Amostra</Text>
       </Pressable>
       <Pressable style={{backgroundColor:"white", padding:12, borderRadius:12,borderWidth:1,borderColor:"blue" }} onPress={()=>CancelModal()}>
                <Text style={{color:"blue", textAlign:"center", fontSize:18}}>cancelar</Text>
       </Pressable>
      </View>
      </Modal>
    )
  }

function InputAmount({label,setValue}:{label:string,setValue:(value:string)=>void}){
  const amount = [1,2,3,4,5]
  const [amountSelected,setAmountSelected] = useState(1)
  function handleAmount(item:number){
    setAmountSelected(item)
    setValue(String(item))
  }
  return(
    <View>
            <Text style={{fontWeight:"700"}}>Número de {label}</Text>
          <View style={{flexDirection:"row"}}>
            {
              amount.map((item)=>(
                <Pressable key={item} style={{backgroundColor:item===amountSelected?'blue':'white', borderColor:'blue',borderWidth:1, padding:18, margin:8}} onPress={()=>handleAmount(item)}>
                  <Text style={{color:item===amountSelected?'white':'blue'}}>
                  {item}
                  </Text>
                </Pressable>
              ))
            }
    </View>
    </View>
  )
}
function InputField({placeholder,label,value,setValue}:{label:string ,placeholder:string, value:string,setValue:(value:string)=>void}){
  return(
    <View style={[styles.InputContainer,{flexDirection:'row', alignItems:"center",marginVertical:8}]}>
      <Text style={{width:70, fontWeight:"700"}}>{label}</Text>
    <TextInput onChangeText={(e)=>setValue(e)} value={value} style={{width:"auto",borderLeftWidth:1, borderLeftColor:'gray', padding:8, flex:1, fontSize:16, fontWeight:"600"}} placeholder={`${placeholder}`}/>
    </View>
  )
}

function CardExample({price,title,size,bath,rooms,wage}:{price:string,title:string,size:string,bath:string,rooms:string,wage:string}){
 return(
  <View style={{padding:18, borderBlockColor:'black', borderWidth:1, borderRadius:12, marginVertical:12, width:300,}}>
  <View style={{flexDirection:'column',justifyContent:"space-between",marginBottom:8}}>
  <Text style={{fontWeight:600, fontSize:20}}>{title}</Text>
  <Text style={{fontWeight:600, fontSize:20}}>R${price}</Text>
  </View>
  <View style={{flexDirection:'row', }}>
    <Ionicons name="bed-sharp" size={18} color="black" />
    <Text style={{fontWeight:600, marginRight:12}}>{rooms}</Text>
    <FontAwesome name="bath" size={18} color="black" />
    <Text style={{fontWeight:600,marginRight:12}}>{bath}</Text>
    <MaterialIcons name="garage" size={18} color="black" />
    <Text style={{fontWeight:600,marginRight:12}}>{wage}</Text>
    <FontAwesome6 name="ruler-combined" size={18} color="black" />
    <Text style={{fontWeight:600,marginRight:12}}>{size}</Text>
  </View>
  
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
    InputContainer:{
      padding:8, 
      backgroundColor:colors.grayInput,
      borderRadius:12
    }
  });
