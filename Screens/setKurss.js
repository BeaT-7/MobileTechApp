import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity } from 'react-native';
import {useState} from 'react';

export default function SetKurss({navigation}){

    const [kurss, setkurss]  = useState([
        { label: "IZVĒLIES", value: null },
        { label: "BV", value: "BV" },
        { label: "nBV", value: "nBV" },
        { label: "BVV", value: "BVV" },
        { label: "ESME", value: "ESME" },
        { label: "IT", value: "IT" },
        { label: "eIT", value: "eIT" },
        { label: "ITk", value: "ITk" },
        { label: "KI", value: "KI" },
        { label: "KECE", value: "KECE" },
        { label: "KSA", value: "KSA" },
        { label: "MSZ", value: "MSZ" },
        { label: "MIP", value: "MIP" },
        { label: "MT", value: "MT" },
        { label: "MTk", value: "MTk" },
        { label: "PI", value: "PI" },
        { label: "SSM", value: "SSM" },
        { label: "ITEM", value: "ITEM" },
        { label: "SKP", value: "SKP" },
        { label: "TOV", value: "TOV" },
        { label: "TSV", value: "TSV" },
        { label: "TG", value: "TG" },
        { label: "VRVT", value: "VRVT" }])

      const [gads, setgads] = useState([
        { label: "IZVĒLIES", value: null },
        { label: "1. kurss", value: 1 },
        { label: "2. kurss", value: 2 },
        { label: "3. kurss", value: 3},
        { label: "4. kurss", value: 4 },
        { label: "5. kurss", value: 5 }]);   

      const [selectedkurss, setSelectedkurss] = useState([null]);
      const [selectedgads, setSelectedgads] = useState([null]);

      let kurssItems = kurss.map( (kurss) => {
             return <Picker.Item key={kurss.value} value={kurss.value} label={kurss.label} />
         });
   let gadsItems = gads.map( (gads) => {
             return <Picker.Item key={gads.value} value={gads.value} label={gads.label} />
         });

   return (
     <React.Fragment>
     <View style={styles.container}>
          <Text> Izvēlies savu studiju programmu: </Text>
         <Picker
           selectedValue={selectedkurss}
           style={{height: 50, width: 150}}
           onValueChange={(kurss) => {
             setSelectedkurss(kurss);
           }
           }>
           {kurssItems}
         </Picker>
         <Text> Izvēlies savu kursu: </Text>
         <Picker
           selectedValue={selectedgads}
           style={{height: 50, width: 150}}
           onValueChange={(gads) => {
             setSelectedgads(gads);
           }
           }>
           {gadsItems}
         </Picker>
         </View>
         <View>
         <Button
               title = 'ESMU IZVĒLĒJIES'
               color = 'black'
               onPress = {() => navigation.navigate('Home')}
               />
         </View>
         <StatusBar style="auto" />
         </React.Fragment>
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
