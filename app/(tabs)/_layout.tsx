import { Tabs } from 'expo-router';
import React from 'react';


import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'green',
        tabBarHideOnKeyboard:true
      }}>
      <Tabs.Screen
        name="(comparativo)"
        options={{
          title: 'Comparativo',
          tabBarIcon:({focused, color})=>(<MaterialCommunityIcons  name="compare" size={24} color={color} />)
        }}
      />
      <Tabs.Screen
        name="comparativo2"
        options={{
          title: 'Comparativo Simplificado',
          tabBarIcon:({color})=>(<MaterialCommunityIcons name="select-compare" size={24} color={color} />)
        }}
      />
            <Tabs.Screen
        name="evolutivo"
        options={{
          title: 'Metodo Evolutivo',
          tabBarIcon:({color})=>(<FontAwesome6 name="layer-group" size={24} color={color} />)

        }}
      />
            <Tabs.Screen
        name="involutivo"
        options={{
          title: 'Metodo Involutivo',
          tabBarIcon:({color})=>(<MaterialIcons name="radar" size={24} color={color} />)
        }}
      />
    </Tabs>
  );
}
