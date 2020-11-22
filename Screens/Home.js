import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App({navigation}) {
  return (
    <React.Fragment>
      <View>
        <Button
          title = 'Settings'
          onPress = {() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.container}>
        <Text>Home screen</Text>
        <StatusBar style="auto" />
      </View>
    </React.Fragment>
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
