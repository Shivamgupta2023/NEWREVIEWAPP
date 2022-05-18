
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Icons  ()  {
    return (

        <View>
            <View style={styles.iconRows}>
                <Icon
                    name="checkbox-blank-circle"
                    style={{ fontSize: 30, color: 'yellow', }}
                />
                <Icon
                    name="share-variant-outline"
                    style={{ fontSize: 30, color: 'blue', }}
                />
                <Icon
                    name="bookmark-outline"
                    style={{ fontSize: 30, color: 'blue', }}
                />
            </View>
            <View style={styles.textRows}>
                <Text>Relevence</Text>
                <Text>Share</Text>
                <Text>bookmark</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    iconRows: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-around',

    },
    textRows: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-around',
    }
})
