import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';


export default function App({navigation}) {
  return (
    <React.Fragment>

      {/* setting button */}
      <View style = {{backgroundColor:'white'}}>
        <TouchableOpacity onPress = {() => navigation.navigate('Settings')} style = {styles.settingButtonImg}>
          <Image
          style = {styles.settingButtonImg}
          source={require('../Resources/icons/settingBtn.png')}
          />
        </TouchableOpacity>
      </View>
      
      {/* do what ever here */}
      <View style={styles.container}>
        {/* CODE_STUFF */}
      </View>
    </React.Fragment>
  );
}

//gets screen parameters
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height); //not used at the moment

//gets ratio for setting button
const settingBtnRatio = screenWidth/6


//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    justifyContent: 'center',
  },
  //setting button style
  settingButtonImg:{
    alignSelf: 'flex-end',
    width:settingBtnRatio,
    height:settingBtnRatio,
    backgroundColor:'white',
    marginRight:'2%',
    marginTop:'2%',
    marginLeft:'90%'
  },
  SettingButton:{

  }
});
