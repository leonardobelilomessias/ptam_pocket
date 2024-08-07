import { Text, View } from "react-native";

export function EmptyComponent(){
    return(
        <View>

        <Text style={{flex:1, maxWidth:300, alignSelf:"center"}}>Você ainda não adicionou nenhuma mostra. Clique em adicionar amostra para começar.
        </Text>
        </View>
    )
}