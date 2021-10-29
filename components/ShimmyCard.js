import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { 
	useFonts,
	Montserrat_500Medium,
	Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';

const ShimmyCard = () => {
    const navigation = useNavigation();
    
    // TODO Firebase call for scheduled Shimmytimes.
    const [listData, setListData] = useState(
        Array(3)
          .fill('')
    );

    // Loads fonts
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    // Renders each ShimmyTime
    const renderItem = (data) => (
        <TouchableHighlight
            onPress={() => navigation.navigate('ShimmyTime')}
            style={styles.rowFront}
            underlayColor={'#FAF9F6'}
        >
        <View>
          <Text style={{  marginLeft: 20, fontFamily: 'Montserrat_600SemiBold', whiteSpace: "pre-line" }}>{ Math.floor(Math.random() * 4)}PM    <View>
              <Text style={{ marginLeft: 30, fontFamily: 'Montserrat_500Medium'}}>{'     Shimmy Time'}
              </Text></View>
            </Text>
        </View>
        </TouchableHighlight>
    );
    
    // Renders Edit, Delete for Shimmytimes
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
		
    // Renders shimmy cards
    return (<View>
        <Text style={{ right: 20, fontFamily: 'Montserrat_600SemiBold', fontSize: 16, lineHeight: 24, marginBottom: 16 }}>Today's schedule:</Text>
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    </View>
    );
}

// Styles cards
const styles = StyleSheet.create({
    container: {
        width: 311,
        backgroundColor: 'FAF9F6'
    },
    backTextWhite: {
        color: 'black',
    },
		rowLeft: {

		},
    rowFront: {
        borderRadius: 20,
        backgroundColor: '#B6E8E9',
        justifyContent: 'center',
        marginBottom: 10,
        height: 64,
    },
    rowBack: {
        borderRadius: 2,
        alignItems: 'center',
        backgroundColor: 'FAF9F6',
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'orange',
        right: 75,
    },
    backRightBtnRight: {
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        backgroundColor: 'red',
        right: 0,
    },
});

export default ShimmyCard;