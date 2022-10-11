import { NativeBaseProvider, StatusBar } from 'native-base';
import Navigation from '../wmdd-4998-movie-app-nikhil/src/navigation/Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
      <StatusBar barStyle="light-content" />
    </NativeBaseProvider>
  );
}
