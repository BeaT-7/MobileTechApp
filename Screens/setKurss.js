import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {useState} from 'react';

const setKurss = ({navigation}) => {
  const [userKurss, setUserKurss] = useState();
  const [userGads, setUserGads] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container1}>
      <Text> Izvēlies savu studiju programmu: </Text>
        <Picker
          selectedValue={userKurss}
          style={{height: 50, width: 150}}
          onValueChange={(userkurss) => {
            setUserKurss(userkurss);
          }
        }>
        <Picker.Item label= "IZVĒLIES" value= "default" />
        <Picker.Item label= "BV" value= "BV" />
        <Picker.Item label= "nBV" value = "nBV"/>
        <Picker.Item label= "BVV" value= "BVV" />
        <Picker.Item label= "ESME" value= "ESME" />
        <Picker.Item label= "IT" value= "IT" />
        <Picker.Item label= "eIT" value= "eIT" />
        <Picker.Item label= "ITk" value="ITk" />
        <Picker.Item label= "KI" value= "KI"/>
        <Picker.Item label= "KECE" value= "KECE"/>
        <Picker.Item label= "KSA" value= "KSA" />
        <Picker.Item label= "MSZ" value= "MSZ" />
        <Picker.Item label= "MIP" value= "MIP"/>
        <Picker.Item label= "MT" value= "MT" />
        <Picker.Item label= "MTk" value= "MTk"  />
        <Picker.Item label= "PI" value= "PI" />
        <Picker.Item label= "SSM" value= "SSM" />
        <Picker.Item label= "ITEM" value= "ITEM"/>
        <Picker.Item label= "SKP" value= "SKP" />
        <Picker.Item label= "TOV" value= "TOV"  />
        <Picker.Item label= "TSV" value= "TSV"/>
        <Picker.Item label= "TG" value= "TG" />
        <Picker.Item label= "VRVT" value= "VRVT"/>

        </Picker>
        <Text> Izvēlies savu kursu: </Text>
        <Picker
          selectedValue={userGads}
          style={{height: 50, width: 150}}
          onValueChange={(usergads) => {
            setUserGads(usergads);
          }
          }>
          <Picker.Item label= "IZVĒLIES" value= "default" />
          <Picker.Item label= "1.kurss" value= "1"/>
          <Picker.Item label= "2.kurss" value= "2"/>
          <Picker.Item label= "3.kurss" value= "3"/>
          <Picker.Item label= "4.kurss" value= "4"/>
          <Picker.Item label= "5.kurss" value= "5"/>
        </Picker>
        </View>
        <View>
        <Button
        title = 'ESMU IZVĒLĒJIES'
        color = 'black'
          onPress={() =>
            navigation.navigate('Home', {
              kurss: userKurss,
              gads: userGads,
            })
          }
        />

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default setKurss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
