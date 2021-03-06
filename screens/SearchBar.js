import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
    return (
      <View style={styles.container}>
        <View
          style={
            clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Icon
             name = "text-box-search"
             style={{fontSize: 30, color:'black'}}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
    
            onChangeText={setSearchPhrase}
            onFocus={() => {
              setCLicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Icon name="cross" size={30} color="black" style={{ padding: 1 }} onPress={() => {
                setSearchPhrase("")
            }}/>
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setCLicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>
    );
  };
  export default SearchBar;
  
  // styles
  const styles = StyleSheet.create({
    container: {
      margin: 15,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "90%",
  
    },
    searchBar__unclicked: {
      padding: 10,
      flexDirection: "row",
      width: "95%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
    },
    searchBar__clicked: {
      padding: 10,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "90%",
    },
  });