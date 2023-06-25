import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.headerElements}>
        <View><Icon name="arrow-back" size={30} color="#ccc"/></View>
        <Text style={styles.headerText}>Tax Calculator</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 50,
        border: 1,
        backgroundColor: '#004D40',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    headerElements: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize:20,
        fontWeight: '600'
    }
})