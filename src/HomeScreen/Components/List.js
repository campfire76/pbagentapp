// List.js
import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Item from './Card';


// definition of the Item, which will be rendered in the FlatList



// the filter
const List = (props) => {

  const [counter, setCounter] = useState(0);
  let mycounter = 0;
  //console.log(props.data[0].id);
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      mycounter += 1
      return <Item myitem={item} counter={mycounter}/>
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      mycounter += 1
      return <Item myitem={item} counter={mycounter}/>
    }
    // filter of the description
    if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      mycounter += 1
      return <Item myitem={item} counter={mycounter}/>
    }
  };
  return (
    <SafeAreaView style={styles.list__container}>
      {/* <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }} */}
      {/* > */}
        <FlatList
          data={props.data}
          renderItem={renderItem}
          ListHeaderComponent={props.ListHeaderComponent}
          keyExtractor={(item) => item.id}
        />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    height: "100%",
    width: "100%",
    marginBottom:24,
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});