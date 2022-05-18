import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ReviewDetails({route, navigation}) {
  const {headerTitle, newsContent} = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={styles.row}>
        <Icon
          name="chevron-left"
          style={{fontSize: 40, color: 'blue'}}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.feed}>My Feed</Text>
        <Icon
          name="reload"
          style={{fontSize: 30, color: 'blue', marginLeft: 135, marginTop: 5}}
        />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <Text style={styles.headline}>{headerTitle}</Text>
        <Text>{newsContent}</Text>
        <View>
        <Text style = {styles.reviews}>USER REVIEWS</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  disc: {
    flexDirection: 'row',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  reviews: {
    fontWeight: 'bold',
    marginTop:30,
    fontSize:15,
    color:'black',
  },
  feed: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 130,
    marginTop: 10,
    paddingBottom: 6,
    borderBottomColor: 'blue',
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  newtext: {
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  headline: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginBottom: 5,
  },
  iconRows: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
  },
  headerText: {
    marginTop: 5,
    marginBottom: 15,
  },
  textRows: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
  },
});
