import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Setting page</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
