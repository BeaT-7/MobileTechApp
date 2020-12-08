import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';





export default function App() {
  //priekš paziņojumu pogas
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState =>
    !previousState);

  return (
    <View style={pazinojumi.container} >
      <Text>Paziņojumi</Text>
      {/*<StatusBar style="auto" />*/}
    {/* es nahuj nevaru sita jobana poga negrib iet pa labi lai ko es daru, to es pabeighsu velak )*/}
        <Switch style={{aligncontent:'flex-end'}}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}

      />


    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:'row',
    //alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const pazinojumi = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'flex-end',
    padding: 16,
    marginTop:16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius:10
  }
});

const padding = StyleSheet.create({
  con:{
    paddingTop: 1
  }
})
