import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines/sources?apiKey=0440b922cff345099797e9c05328d502',
    )
      .then(response => response.json())
      .then(json => {
        setData(json?.sources);
        setVal(json?.sources);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const searchUser = text => {
    if (text) {
      const newData = data?.filter(function (item) {
        const itemData = item?.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(val);
      setSearch(text);
    }
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.row}>
            <Text style={[styles.feed]}>NEWS FEED</Text>
            <Icon
              name="reload"
              style={{
                fontSize: 30,
                color: 'blue',
                marginLeft: 130,
                marginTop: 5,
              }}
            />
          </View>

          <View style={styles.container}>
            <Icon
              name="text-box-search"
              style={{fontSize: 30, color: 'black'}}
            />
            <TextInput
              style={styles.input}
              placeholder="Search here..."
              value={search}
              onChangeText={text => {
                searchUser(text);
              }}
            />
          </View>

          <FlatList
            data={data}
            keyExtractor={(item, index) => `key_${index}`}
            renderItem={({item}) => (
              <View style={styles.CardView}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Details', {
                      headerTitle: item.name,
                      imageNews: item.url,
                      newsContent: item.description,
                    })
                  }
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: '',
                    
                  }}>
                  
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text numberOfLines={2} style={styles.headline}>
                      {' '}
                      {item.name}
                    </Text>
                    <Text numberOfLines={3} style={styles.headerText}>
                      {' '}
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  disc: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  CardView: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  feed: {
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 6,
    borderBottomColor: 'blue',
    borderBottomWidth: 5,
    borderRadius: 5,
    fontSize: 15,
    marginLeft: 150,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  newtext: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    height: 40,
  },
  headline: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginTop: 5
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
