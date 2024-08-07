import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';



export default function amostras() {
  return (
    <View>
      <Text>Comparativo no index</Text>
      <Button title='avançar para mostras' onPress={()=>router.push('/')}/>
    </View>
  );
}
