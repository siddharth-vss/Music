// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }
import { Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = ()=>{
  return(
    <SafeAreaProvider>
      <RootNavigation/>
      <StatusBar style='auto' />
      {/* Your App components */}
    </SafeAreaProvider>
  )
}

const RootNavigation =()=>{
 return( <Stack>
    <Stack.Screen name='(tabs)'  options={{headerShown: false}}/>
    {/* <Stack.Screen name='Details' component={DetailsScreen} options={{headerTitle: 'Details'}}/> */}
    {/* Add other screens */}
  </Stack>)
}
export default App;