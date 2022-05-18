import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Category({navigation}) {
  const [Data, setData] = useState([]);
  const [Val, setVal] = useState();
  const [categoryArr, setCategoryArr] = useState();
  const [languageArr, setLanguageArr] = useState();
  const [selectStateArr, setSelectStateArr] = useState([]);
  const [selectLanguage, setSelectLanguage] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines/sources?apiKey=0440b922cff345099797e9c05328d502',
    )
      .then(response => response.json())
      .then(json => {
        setData(json?.sources);
        setVal(json?.sources);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (Data?.length) {
      const tempCatArr = [];
      Data?.forEach((item, index) => {
        if (!tempCatArr?.find((i, index) => i === item?.category)) {
          tempCatArr.push(item?.category);
        }
      });
      if (tempCatArr.length) {
        setCategoryArr(tempCatArr);
      }
    }
  }, [Data]);

  useEffect(() => {
    if (Data?.length) {
      const tempLangArr = [];
      Data?.forEach((item, index) => {
        if (!tempLangArr?.find((i, index) => i === item?.language)) {
          tempLangArr.push(item?.language);
        }
      });
      if (tempLangArr.length) {
        setLanguageArr(tempLangArr);
      }
    }
  }, [Data]);

  useEffect(() => {
    if (selectStateArr.length && categoryArr) {
      submitHandler(selectStateArr, selectLanguage);
    } else {
      setVal(Data);
    }
  }, [selectStateArr]);

  useEffect(() => {
    if (selectLanguage.length && languageArr) {
      submitHandler(selectStateArr, selectLanguage);
    } else {
      setVal(Data);
    }
  }, [selectLanguage]);

  const submitHandler = (selectStateArr, selectLanguage) => {
    console.log(selectStateArr);
    console.log(selectLanguage);
    const searchData = [];
    if (selectLanguage.length) {
      searchData.push(
        ...Data?.filter(
          data =>
            selectStateArr?.includes(data?.category) &&
            selectLanguage?.includes(data?.language),
        ),
      );
    } else {
      searchData.push(
        ...Data?.filter(data => selectStateArr?.includes(data?.category)),
      );
    }
    setVal(searchData);
  };

  return (
    <View>
      <View style={styles.cat}>
        <Text style={styles.catText}>FILTER NEWS</Text>
      </View>

      <Text style={{fontWeight: '700', fontSize: 15, marginLeft: 10, marginTop:10}}>
        CATEGORIES
      </Text>

      <View style={styles.catStyle}>
        <ScrollView horizontal={true}>
          {categoryArr?.map((item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  backgroundColor: selectStateArr.includes(item)
                    ? 'orange'
                    : 'white',
                    elevation: 8,
                  borderRadius: 10,
                }}
                key={`key${index}`}>
                <TouchableOpacity
                  style={styles.catColor}
                  key={index}
                  onPress={() => {
                    if (selectStateArr.includes(item)) {
                      const stateArray = selectStateArr.filter(
                        items => items !== item,
                      );
                      setSelectStateArr(stateArray);
                    } else {
                      setSelectStateArr([...selectStateArr, item]);
                    }
                  }}>
                  <Text style={{fontWeight: 'bold'}}> {item} </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <Text
        style={{
          fontWeight: '700',
          fontSize: 15,
          marginLeft: 10,
          marginTop: 10,
        }}>
        LANGUAGES
      </Text>

      <View style={styles.catStyle}>
        <ScrollView horizontal={true}>
          {languageArr?.map((item, index) => {
            return (
              <View
                style={{
                  margin: 10,
                  backgroundColor: selectLanguage.includes(item)
                    ? 'orange'
                    : 'white',
                  width: 60,
                  elevation: 8,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (selectLanguage.includes(item)) {
                      const langArr = selectLanguage.filter(
                        lang => lang !== item,
                      );
                      setSelectLanguage(langArr);
                    } else {
                      setSelectLanguage([...selectLanguage, item]);
                    }
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={Val}
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
                flexDirection: 'row',
                backgroundColor: '',
                marginBottom: 24,
              }}>
      
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.catText} numberOfLines={2}>
                    {' '}
                    {item.category}
                  </Text>
                  <Text style={styles.catNewText}> {item.language}</Text>
                </View>
                <Text numberOfLines={4} style={styles.headerText}>
                  {' '}
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="click here" onPress={submitHandler}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  cat: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  catText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  catNewText: {
    color: 'blue',
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
    marginLeft: 10,
    marginRight: 16,
  },
  catType: {
    flex: 1,
    flexDirection: 'row',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  catColor: {
    width: 100,
    height: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  catStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
