import { StatusBar, SafeAreaView } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/navigation/index';

export default function App() {
  return (<>
    <StatusBar barStyle={'dark-content'} />

      <Navigation />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
