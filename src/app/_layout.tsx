
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Player from './player'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { LoaderKitProvider } from 'react-native-loader-kit';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TrackPlayer from 'react-native-track-player';

const App = () => {
  useEffect(() => {
    async function setupPlayer() {
      await TrackPlayer.setupPlayer();
      // await TrackPlayer.add({
      //   id: 'trackId',
      //   url: 'https://audio.jukehost.co.uk/Tn0JjUOFnQXt94p3CQCA4AkB3weF51Yf',
      //   title: 'Changing',
      //   artist: 'NEFFEX',
      //   artwork: "https://i1.sndcdn.com/artworks-ZaFhh1AQdO4hqdYb-ssYmcA-t500x500.jpg"
      // });
      // await TrackPlayer.play();
    }

    setupPlayer();

    // return () => {
    //   TrackPlayer.reset();
    // };
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <LoaderKitProvider> */}
        <SafeAreaProvider>
          <RootNavigation />
          <StatusBar style='auto' />
          {/* Your App components */}
        </SafeAreaProvider>
      {/* </LoaderKitProvider> */}
    </GestureHandlerRootView>
  )
}

const RootNavigation = () => {
  return (<Stack>
    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    <Stack.Screen name='player'  options={{headerShown: false}}/>
    {/* Add other screens*/}
  </Stack>)
}
export default App;