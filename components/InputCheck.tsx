import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";



export function InputCheck(){
    const [isChecked, setChecked] = useState(false);
    const [commodities, setCommodities] = useState([
        { label: "Sauna", select: false },
        { label: "Piscina", select: false },
        { label: "Academia", select: false },
        { label: "Churrasqueira", select: false },
        { label: "Playground", select: false },
        { label: "Salão de festas", select: false },
        { label: "Portaria 24h", select: false },
        { label: "Garagem", select: false },
        { label: "Elevador", select: false },
        { label: "Área de serviço", select: false },
        { label: "Varanda", select: false },
        { label: "Aquecimento central", select: false },
        { label: "Ar condic.", select: false },
        { label: "Pet friendly", select: false },
        { label: "Wi-Fi", select: false },
      ]);
      const handleCheckboxChange = (index:any) => {
        const newCommodities = [...commodities];
        newCommodities[index].select = !newCommodities[index].select;
        setCommodities(newCommodities);
      };
    return (
    <View>
        <Text style={{fontWeight:  '700'}}>Comodidades</Text>
      <View style={styles2.container}>
        {commodities.map((commodities,index)=>(
            <View key={commodities.label} style={styles2.section}>
                    <Checkbox color={'blue'} style={styles2.checkbox} value={commodities.select} onValueChange={()=>handleCheckboxChange(index)}  />
                    <Text style={styles2.paragraph}>{commodities.label}</Text>
                  </View>
        ))}
      </View>
    </View>
    );
  }
  
  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 8,
      flexDirection:"row",
      flexWrap:'wrap'
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    minWidth:120    
},
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
      color:"blue"
    },
  });
  