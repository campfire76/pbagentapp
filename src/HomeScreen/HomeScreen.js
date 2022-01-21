import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from "expo-app-loading";
import { useFonts,
          Merriweather_700Bold} from "@expo-google-fonts/merriweather";
 import { Roboto_400Regular} from "@expo-google-fonts/roboto";
import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import List from "./Components/List";
import SearchBar from "./Components/SearchBar";
import * as myData from './people.json';

const Home = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [peopleData, setPeopleData] = useState(myData.default);
  const [fontsLoaded] = useFonts({Roboto_400Regular, Merriweather_700Bold})


  
  // get data from the fake api endpoint
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const apiResponse = await fetch(
  //         "https://mocki.io/v1/bb03efe4-22c6-4185-bac5-5864bc68b12a"
  //       );
  //       const data = await apiResponse.json();
  //       setFakeData(data);
  //     } catch (error) {
  //       setFakeData(myData);
  //       console.log("Setting myData");
  //       console.log(error.message);
  //     }
      
  //     //console.log(data);
  //   };
  //   getData();
  // }, []);
  // console.log(peopleData.default);
  // console.log("-----------------------------------------------------------------------")
  // console.log(fakeData)
  // console.log("-----------------------------------------------------------------------")
  if(!fontsLoaded){
    return <AppLoading />
  }
  else{return (
    
    <SafeAreaView style={styles.root}>
      
      { (

          <List
            searchPhrase={searchPhrase}
            //data={fakeData}
            data={peopleData}
            ListHeaderComponent={() => (
              <View>
              {!clicked && <Image source={require('./assets/pblogo.png')} style={styles.image} />}
              {!clicked && <Text style={styles.title1}>Hey, Mohit</Text>}
              {!clicked && <Text style={styles.title2}>Welcome back.</Text>}
              <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
              />
              </View>
            )}
            setClicked={setClicked}
          />

      )}
      <StatusBar translucent={true}/>
    </SafeAreaView>
  );
}
  
};

export default Home;

const styles = StyleSheet.create({

  root: {
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title1: {
    width: "100%",
    marginTop: 24,
    fontSize: 25,
    fontFamily: 'Merriweather_700Bold',
    color: '#253858',
    marginLeft: 16,
  },

  title2: {
    width: "100%",
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
    color: '#253858',
    opacity: 0.6,
    marginLeft: 16,
  },

  image:{
    marginLeft: 16,
    height: 32,
    width: 32,
    marginTop: 24,
    borderRadius: 16,
  },
});