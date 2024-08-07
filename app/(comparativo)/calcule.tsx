import { ScrollView, StyleSheet, Text, View } from "react-native";
import { chauvenetLimits } from "../constants/chauvnet";
import { itmType } from "../types/typeItems";
import { TabeleCalcule } from "@/components/TableCalculeXi";
import { TabeleCalculeD } from "@/components/TableCalculeD";
import { TabeleCalculeXiXm2 } from "@/components/TableCalculeXiXm2";
import { TabeleCalculeOutCv } from "@/components/TableCalculeOutCv";

export default function  Calcule(){
    const items = [
       
        {title:'teste1', price:399000,mt:38,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:398000,mt:40,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:299000,mt:32,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:297000,mt:42,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:288000,mt:38,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:298000,mt:40,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0},
        {title:'teste1', price:294000,mt:38,xi:0,xm:0,d:0,s:0,powXiXm2:0,cv:0,outCv:0}]
    const items2 = [{title:'teste1', price:30}, {title:'teste1', price:40},{title:'teste1', price:20}]
    return(
        <ScrollView style={{flex:1, backgroundColor:"white"}}>  
        <View style={{padding:24}}>


            <RenderCalculoXi items={items}/>
            <RenderXm items={items}/>
            <RenderD items={items}/>
            <RenderXiXm2 items={items}/>
            <RenderS items={items}/>
            <RenderCv items={items}/>
            <RenderOutCv items={items}/>
           <Text style={style.title}>chauvenete limite  para {items.length} amostras = {chauvenetLimits[items.length]}</Text> 
        </View>
        </ScrollView>
    )
}

function RenderCalculoXi({items}:{items:itmType[]}){
    const resultxi = calculoXi(items).sort((a, b) => a.xi - b.xi)
    return(
        <View style={{marginVertical:12}}>
        <Text style={style.title} >Calculo Areas das amostras (Xi)</Text>
        {/* {
            resultxi.map((item)=>
            <Text key={item.mt}>{ parseFloat(item.xi.toFixed(2))}</Text>
            )
        } */}
        <TabeleCalcule items={resultxi} />
        </View>
    )
}
function RenderXm({items}:{items:itmType[]}){
    return(
        <>
        <Text style={style.title}>Calculo Media das amostras</Text>
        <Text> R${calculoM(items)}</Text>
        </>
    )
}
function RenderD({items}:{items:itmType[]}){
    const resultD = calculoD(items).sort((a, b) => a.xi - b.xi); 
return(
    <View style={{marginVertical:12}}>
    <Text style={style.title}>Desvio Individual {`(D)`}</Text>
    <View style={{marginVertical:4}}>
        <TabeleCalculeD items={resultD}/>
        </View>
    </View>
)
}


function RenderXiXm2({items}:{items:itmType[]}){
    const resultpowXiXm2 = calculoPowXiXm2(items).sort((a, b) => a.xi - b.xi); 
    return(
        <View style={{marginVertical:12}}>
        <Text style={style.title}>Caulculo de {`(Xi-Xm)\u00B2`}</Text>
        <TabeleCalculeXiXm2 items={resultpowXiXm2}/>
        </View>
    )
}
function RenderS({items}:{items:itmType[]}){
    const resultadoS = calculeS(items)
    return(
        <View style={{marginVertical:12}}>
        <Text style={style.title}>Resultado Desvio Padrão {`(s)`}</Text>
      
            <Text >s = { parseFloat(resultadoS.toFixed(2))}</Text>
  
        </View>
    )
}

function RenderCv({items}:{items:itmType[]}){
    const resultadoCv = calculeCv(items)
    return(
        <View style={{marginVertical:12}}>
        <Text style={style.title}>Coeficiente de variação</Text>
      
            <Text >{ resultadoCv}%</Text>
  
        </View>
    )
}
function RenderOutCv({items}:{items:itmType[]}){
    const resultadoCv = calculeOutCV(items)
    return(
        <View style={{marginVertical:12}}>
        <Text style={style.title}>Fora do desvio CV</Text>
  <TabeleCalculeOutCv items={resultadoCv}/>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:"700", marginBottom:4
    }
})
function calculoXi(items:itmType[]){
    const newValues = items.map((item)=>{
        let metro2 = item.price/ item.mt
        item.xi =   parseFloat(metro2.toFixed(2))
        return item
    })
    return newValues
}

function calculoM(items:itmType[]){
    const resultXi = calculoXi(items)
    
    const somaxi = resultXi.reduce((acc, item) => acc + item.xi, 0);

   const media = somaxi / items.length;
   
 
    return parseFloat(media.toFixed(2))
}


function calculoD(items:itmType[]){
    const resultM = calculoM(items)
   
    const resultcalculoXi = calculoXi(items)
    const resultD = resultcalculoXi.map((item)=>{
        item.d = parseFloat((item.xi - resultM).toFixed(2)) 
        return item
    })

    const soma = items.reduce((acc, item) => acc + item.d, 0);
    return resultD
}

function calculoPowXiXm2(items:itmType[]){
    const resultd = calculoD(items)
    const resultao2 = resultd.map((item)=>{
        item.powXiXm2 = Math.pow(item.d, 2)
        return item
    })
    return resultao2
}

function calculeS(items:itmType[]){
    const resultpowXixm2 = calculoPowXiXm2(items)
    const soma = resultpowXixm2.reduce((acc, item) => acc + item.powXiXm2, 0);
  //  console.log('soma',soma)
    const newlength = items.length -1

    const result2 = soma / newlength
   // console.log('quantidade de itemns', newlength)
  //  console.log('dividido pela tquantidade de itemns', result2)

    const raizQuadrada = Math.sqrt(result2) ;
    //console.log('Raizquadraa', raizQuadrada)

    return  raizQuadrada
}

function calculeCv(items:itmType[]){
    const resultS = calculeS(items)
    const resultM = calculoM(items)
    const resultDiv = resultS / resultM
    const resultCv = resultDiv *100
    return resultCv
}
function calculeOutCV(items:itmType[]){
    const resultD = calculoD(items)
    
    const resulS = calculeS(items)
    const resultOutCv = resultD.map((item)=>{
        const resultout = Math.abs(item.d)  / resulS
        item.outCv = resultout
        //console.log(item.outCv)
        return item
    })
    //console.log(resultOutCv.length)
    return resultOutCv
}
