import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthContextProvider from './src/context/AuthContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
