import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component  } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ActivityIndicator, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendario';


//https://lekcijas.va.lv/lekcijas_android/getLecturesForSelectedDay.php?date=2020-12-4&program=IT1

export default function App({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [date, setDate] = useState(getCurrentDate(day, month, year, 0, 0, 0));
  var months = {1:'Jan' , 2:'Feb', 3:'Mar', 4:'Apr', 5:'May', 6:'Jun', 7:'Jul', 8:'Aug', 9:'Sep', 10:'Oct', 11:'Nov', 12:'Dec'};

  //Date variables
  var day = 0;
  var month = 0;
  var year = 0;

  //gets todays date and formats it for API
  function getCurrentDate(day, month, year, n1, n2, n3){
      day = new Date().getDate() + n1;
      month = new Date().getMonth() + 1 + n2;
      year = new Date().getFullYear() + n3;

      return year + '-' + month + '-' + day; //format: yyyy-mm-dd


  }

  //checks if there are lectures in selected day, outputs data accordingly
  function isEmpty(item) {
    if (item.kurss == null) {
      return (

          <TouchableOpacity style = {styles.mainButton}>
            <Text style={styles.mainButtonText2}>There's no lectures on this day!</Text>
          </TouchableOpacity>

      );
    } else {
      return (
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>{item.kurss}</Text>
          <Text style={styles.mainButtonText}>
            {item.sakums} - {item.beigas}
          </Text>
          <Text style={styles.mainButtonText}>
            {item.nosaukums}, {item.lektors}
          </Text>
        </TouchableOpacity>
      );
    }
  }


  //formats date from calendar to yyyy-mm-dd format and refreshes API
  function dateChange(val) {
    setData(null);
    setLoading(true);
    var str = String(Object.values(val)[0]).split(' ');
    var res = str[3] + '-' + Object.keys(months).find(key => months[key] === str[1]) + '-' + str[2]
    fetch('https://lekcijas.va.lv/lekcijas_android/getLecturesForSelectedDay.php?date='+res+'&program='+route.params.kurss+route.params.gads)
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    return (
      res
    )
  }

  // gets data from API
  useEffect(() => {
    fetch(
      "https://lekcijas.va.lv/lekcijas_android/getLecturesForSelectedDay.php?date=" +
        date +
        "&program=" +
        route.params.kurss +
        route.params.gads
    )
      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
    <React.Fragment>
      {/* setting button */}
      <View style = {{backgroundColor:'white'}}>
        <TouchableOpacity 
          onPress = {() => navigation.navigate('Settings')} 
          style = {styles.settingButtonImg}
        >
          <Image
            style={styles.settingButtonImg}
            source={require("../Resources/icons/settingBtn.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/*pagaidu texts, var nemt nost ja grib*/}

        <Text style={styles.dateFont}>{date}</Text>
        <Calendar
          onChange={(selectedDate) => setDate(dateChange(selectedDate))}
          startDate={date}
          numberOfMonths = {1}
          disableRange = {true}
          firstDayMonday = {true}
          monthHeight = {270}
          showMonthTitle = {false}
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: '#6d95da',
              fontWeight: '300',
              fontSize: 13,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: '200',
            },
            weekColumnsContainerStyle: {},
            weekColumnStyle: {
            },
            weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
            },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {
              backgroundColor:'blue',
              color:'blue'
            },
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: {
              color: '#2d4150',
              fontWeight: '200',
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: '#6d95da',
            },
            activeDayContainerStyle: {
              backgroundColor: '#6d95da',
            },
            activeDayTextStyle: {
              color: 'white',
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        />

        {/*lekciju pogas*/}
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ asdf }, index) => asdf }
            renderItem={({ item }) => isEmpty(item)}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

//gets screen parameters
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height); //not used at the moment

//gets ratio for setting button
const settingBtnRatio = screenWidth / 6;

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  //setting button style
  settingButtonImg: {
    alignSelf: "flex-end",
    width: settingBtnRatio,
    height: settingBtnRatio,
    backgroundColor: "white",
    marginRight: "2%",
    marginTop: "2%",
    marginLeft: "90%",
  },
  //lekciju pogas styles
  mainButton:{
    backgroundColor:'#3399FF',
    marginTop:'0.4%',
    marginBottom:'0.4%',
    padding:'1%',
  },
  //text for main button if there are lectures
  mainButtonText: {
    textAlign: "center",
  },
  //text for main button if there are no lectures
  mainButtonText2:{
    textAlign: 'center',
    height:screenHeight/10,
    paddingTop:'6.5%'
  },
  dateFont:{
    fontSize:27,
    fontWeight:'bold',
    textAlign:'center',
  }
});
