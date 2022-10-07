import { NativeBaseProvider, StatusBar } from 'native-base';
import Navigation from '../MoviesApp/src/navigation/Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
     <Navigation />
     <StatusBar barStyle="light-content" />
    </NativeBaseProvider>
  );
}
