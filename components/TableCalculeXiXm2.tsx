import { itmType } from "@/app/types/typeItems";
import { StyleSheet, Text, View } from "react-native";

export function TabeleCalculeXiXm2({items}:{items:itmType[]}){
    return(
        <View>
            <HeaderTable/>
        {
            items.map((item,key)=>
            <View key={key} style={{flexDirection:'row'}}>
            <Text style={style.firstCell}>{key+1}</Text>
            <Text style={style.cell} >{ parseFloat(item.xi.toFixed(2))}</Text>
            <Text style={style.cell} >{ parseFloat(item.d.toFixed(2))}</Text>
            <Text style={style.cell} >{ parseFloat(item.powXiXm2.toFixed(2))}</Text>


            
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
            <Text style={[style.cell,style.headerCell]} >Xi{` (Ordenado)`}</Text>
            <Text style={[style.cell,style.headerCell]} >d=X-Xm</Text>
            <Text style={[style.cell,style.headerCell]} >{`(XiXm)\u00B2`}</Text>

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
        minWidth:80,
        fontSize:14,
        marginHorizontal:4
    },
    firstCell:{
    width:30,
    
    }
})