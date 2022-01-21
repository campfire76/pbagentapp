import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Pressable, Text } from "react-native";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      {/* {props.clicked && (
        <View style={styles.cancelButton}>
          <Pressable
            onPress={() => {
              props.setSearchPhrase('');

            }}
          > 
          <Text >Clear</Text>
          </Pressable>
        </View>
      )} */}
      {props.clicked && (
        <View style={styles.cancelButton}>
          <AntDesign name="left" size={20} color="#253858"  onPress={() => {
              props.setSearchPhrase("");
              Keyboard.dismiss();
              props.setClicked(false);
          }}/>
          </View>
        )}
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Customer Number/Booking ID/Mobile No."
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "stretch",
    flex: 1,
    flexDirection: "row",
    width: "92%",
    marginVertical: 24,

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
   // width: "100%",
    backgroundColor: "#fff",
    borderColor: '#0065FF2E',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
   // width: "100%",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: '#0065FF',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  input: {
    fontSize: 14,
    marginLeft: 10,
    width: "100%",

  },
  cancelButton : {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    borderRadius: 8,
    backgroundColor: "#F2F7FF",
    width: 32,
  },
});