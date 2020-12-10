import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Picker, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Settings = ({ navigation, route }) => {
  const [userKurss, setUserKurss] = useState();
  const [userGads, setUserGads] = useState();

  //priekš paziņojumu pogas
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <React.Fragment>
      <View style={pazinojumi.container}>
        <Text>
         {route.params.kurss} - {route.params.gads}
        </Text>
      </View>
      <View style={pazinojumi.container}>
        <Text>Paziņojumi</Text>
        {/*<StatusBar style="auto" />*/}
        {/* es nahuj nevaru sita jobana poga negrib iet pa labi lai ko es daru, to es pabeighsu velak )*/}
        <Switch
          style={{ aligncontent: "flex-end" }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View>
        <Text>Izvēlies savu studiju programmu:</Text>

        <DropDownPicker
          zIndex={5000}
          items={[
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
            { label: "VRVT", value: "VRVT" },
          ]}
          selectedValue={userGads}
          style={{ height: 50, width: 150 }}
          onValueChange={(usergads) => {
            setUserGads(usergads);
          }}
          //kka jadabu no pirmas lapas defaultValue={userKurss}
          //pieliku defaultValue
          defaultValue = {route.params.kurss}
          placeholder="Izvēlies savu kursu"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#ffffff" }}
          dropDownStyle={{ backgroundColor: "white" }}
          selectedValue={userKurss}
          onChangeItem={(userKurss) => setUserKurss(userKurss.value)}
        />
      </View>

      <View>
        <Text> Izvēlies savu kursu: </Text>
        <DropDownPicker
          zIndex={5000}
          items={[
            { label: "1.kurss", value: "1" },
            { label: "2.kurss", value: "2" },
            { label: "3.kurss", value: "3" },
            { label: "4.kurss", value: "4" },
            { label: "5.kurss", value: "5" },
          ]}
          //kka jadabu no pirmas lapas defaultValue={userKurss}
          //pieliku defaultValue
          defaultValue = {route.params.gads}
          placeholder="Izvēlies savu gadu:"
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#ffffff" }}
          dropDownStyle={{ backgroundColor: "white" }}
          selectedValue={userGads}
          onChangeItem={(userGads) => setUserGads(userGads.value)}
        />
      </View>

      <View style={pazinojumi.container}>
        <Button
          title="Saglabāt izmaiņas"
          color="black"
          onPress={() =>
            navigation.navigate("Home", {
              kurss: userKurss,
              gads: userGads,
            })
          }
        />
      </View>
    </React.Fragment>
  );
};
export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    //alignItems: 'center',
    justifyContent: "flex-end",
  },
});

const pazinojumi = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

const zindeks = StyleSheet.create({
  con3: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
});

const zindeks1 = StyleSheet.create({
  con3: {
    zIndex: 5, // works on ios
    elevation: 5, // works on android
  },
});
const padding = StyleSheet.create({
  con: {
    paddingTop: 1,
  },
});
