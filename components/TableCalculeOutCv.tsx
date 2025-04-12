import { chauvenetLimits } from "@/constants/chauvnet";
import { itmType } from "@/app/types/typeItems";
import { StyleSheet, Text, View } from "react-native";

export function TabeleCalculeOutCv({items}:{items:itmType[]}){
    const vsr = chauvenetLimits[items.length] as number
    
    return(
        <View>
            <HeaderTable/>
        {
            items.map((item,key)=>
            <View key={key} style={{flexDirection:'row'}}>
            <Text style={style.firstCell}>{key+1}</Text>
            <Text style={style.cell} >{ parseFloat(item.price.toFixed(2))}</Text>
            <Text style={style.cell} >{ parseFloat(item.d.toFixed(2))}</Text>
            <Text style={[style.cell,style.lastcell]} >{ parseFloat(item.powXiXm2.toFixed(2))}</Text>
            <Text style={item.outCv>vsr?style.cellOutCv:style.cell} >{ parseFloat(item.outCv.toFixed(2))}</Text>


            
            </View>
            )
        }
        </View>
    )
}


function Cell(){
    return(
        <>
        </>
    )
}
function HeaderTable(){
    return(
        <>
            <View style={{flexDirection:'row', marginBottom:4}}>
            <Text style={[style.firstCell,style.headerCell]}>N</Text>
            <Text style={[style.cell,style.headerCell]} >Preço{`(R$)`}</Text>
            <Text style={[style.cell,style.headerCell]} >d=Xi-Xm</Text>
            <Text style={[style.cell,style.headerCell,style.lastcell]} >{`(XiXm)\u00B2`}</Text>
            <Text style={[style.cell,style.headerCell]} >{`CV`}</Text>

            

            </View>
        </>
    )
}
const style = StyleSheet.create({
    headerCell:{
        fontWeight:"500",
        fontSize:14,
        
    },
    cell:{
        minWidth:65,
        fontSize:14,
        marginHorizontal:4
    },
    firstCell:{
    width:18,
    
    },
    cellOutCv:{
        minWidth:65,
        fontSize:14,
        marginHorizontal:4,
        color:"red"
    },
    lastcell:{
        minWidth:95,
        fontSize:14,
        marginHorizontal:4,
        
    },
})