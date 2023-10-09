import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import {
  Inter_300Light,
  Inter_500Medium,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';

import {RootNavigator} from './src/navigation/root.routes';
import { Providers } from './src/contexts';

SplashScreen.preventAutoHideAsync() as unknown as () => void;

function App() {
  const [updatesReady, setUpdatesReady] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    console.log('Checking for updates');
    if(fontsLoaded) {
      console.log('Loading fonts');
      SplashScreen.hideAsync() as unknown as () => void;
    }
  }, [fontsLoaded]);

  if (!fontsLoaded ) return null;

  return (
    <Providers>
      <RootNavigator />
    </Providers>
  );
}
export default (App);
