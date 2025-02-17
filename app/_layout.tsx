import { SplashScreen, Stack } from "expo-router";
import "../globals.css"
import {useFonts} from 'expo-font'
import { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require('../assets/fonts/Nunito-Bold.ttf'),
    "Nunito-ExtraBold": require('../assets/fonts/Nunito-ExtraBold.ttf'),
    "Nunito-Light": require('../assets/fonts/Nunito-Light.ttf'),
    "Nunito-Medium": require('../assets/fonts/Nunito-Medium.ttf'),
    "Nunito-Regular": require('../assets/fonts/Nunito-Regular.ttf'),
    "Nunito-SemiBold": require('../assets/fonts/Nunito-SemiBold.ttf')
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
  <GlobalProvider>
  <Stack 
    screenOptions={{headerShown:false}}  />;
    </GlobalProvider>
)
}
