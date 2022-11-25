import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from './src/Main';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Sans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'Sans-500': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'Sans-600': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}
