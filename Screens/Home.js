import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';


export default function App({navigation}) {
  return (
    <React.Fragment>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress = {() => navigation.navigate('Settings')}>
          <Image
          style = {styles.settingButton}
          source={require('../Resources/icons/settingBtn.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text>Home screen</Text>
        <StatusBar style="auto" />
      </View>
    </React.Fragment>
  );
}

const screenWidth = Math.round(Dimensions.get('window').width)/6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  settingButton:{
    alignSelf: 'flex-end',
    width:screenWidth,
    height:screenWidth,
    position:'relative',
    backgroundColor:'white',
    marginRight:'2%',
    marginTop:'2%'
  }
});
