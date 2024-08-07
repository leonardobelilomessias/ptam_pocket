import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.


export default function RootLayout() {



  return (

      <Stack screenOptions={{headerShown:true}}>
        <Stack.Screen name="index"  options={{ title:'Ptan Pocket' }} />
      </Stack>


  );
}
