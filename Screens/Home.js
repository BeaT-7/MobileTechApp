import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ActivityIndicator, FlatList } from 'react-native';

//https://lekcijas.va.lv/lekcijas_android/getLecturesForSelectedDay.php?date=2020-12-4&program=IT1

export default function App({navigation, route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [date, setDate] = useState(getCurrentDate())



  //gets todays date and formats it for API
  function getCurrentDate(){
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      return year + '-' + month + '-' + date; //format: yyyy-mm-dd
  }

  //checks if there are lectures in selected day, outputs data accordingly
  function isEmpty(item){
    if (item.kurss == null){
      return (
          <TouchableOpacity style = {styles.mainButton}>
            <Text style={styles.mainButtonText2}>There's no lectures today!</Text>
          </TouchableOpacity>
      );
    } else {
      return(
        <TouchableOpacity style = {styles.mainButton}>
          <Text style={styles.mainButtonText}>{item.kurss}</Text>
          <Text style={styles.mainButtonText}>{item.sakums} - {item.beigas}</Text>
          <Text style={styles.mainButtonText}>{item.nosaukums}, {item.lektors}</Text>
        </TouchableOpacity>
      );
    }
  }


  // gets data from API
  useEffect(() => {
    fetch('https://lekcijas.va.lv/lekcijas_android/getLecturesForSelectedDay.php?date='+date+'&program='+route.params.kurss+route.params.gads)
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
    <React.Fragment>
      {/* setting button */}
      <View style = {{backgroundColor:'white'}}>
      <Text> Programmas izvēle: {route.params.kurss} Kursa izvēle: {route.params.gads}</Text>
        <TouchableOpacity onPress = {() => navigation.navigate('Settings')} style = {styles.settingButtonImg}>
          <Image
            style = {styles.settingButtonImg}
            source={require('../Resources/icons/settingBtn.png')}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.container}>

        {/*pagaidu texts, var nemt nost ja grib*/}
        <Text> Programmas izvēle: {route.params.kurss},  Kursa izvēle: {route.params.gads}</Text>
        <Text>šodienas datums: {date}</Text>

        {/*lekciju pogas*/}
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ sakums }, index) => sakums}
            renderItem={({ item }) => (
              isEmpty(item)
            )}
          />
        )}

      </View>
      <StatusBar style="auto" />
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
  //lekciju pogas styles
  mainButton:{
    backgroundColor:'#3399FF',
    marginTop:'0.4%',
    marginBottom:'0.4%',
    padding:'1%'
  },
  //text for main button if there are lectures
  mainButtonText:{
    textAlign: 'center',
  },
  //text for main button if there are no lectures
  mainButtonText2:{
    textAlign: 'center',
    height:screenHeight/10,
    paddingTop:'6.5%'
  }
});
