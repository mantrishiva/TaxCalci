import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

export default function IncomeDetails() {
  return (
    <View style={styles.income}>
        <View style={styles.tContainer}>
          <View><Text style={styles.tIncomeText}>Total Income:</Text></View>
          <View><Text style={styles.incomeValue}>1000000</Text></View>
          <View><Icon name="edit" size={30} color="#ccc" /></View>
        </View>
        <View style= {styles.tContainer}>
          <View style={styles.nContainer}>
            <View><Text >Net Income:</Text></View>
            <Text style={styles.incomeValue}>800000</Text>
          </View>
          <View style= {styles.borderBetween}></View>
          <View style= {styles.nContainer}>
            <View><Text >Taxable Amount:</Text></View>
            <Text style={styles.incomeValue}>200000</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    income: {
        marginTop: 50,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        width: '90%',
      },
      tContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
      },
      tIncomeText: {
        fontSize: 20,
        color: '#FFFFFF'
      },
      nContainer: {
        width: '42%',
        display: 'flex',
        // justifyContent: 'space-around'
      },
      borderBetween: {
        width: '4%',
        // display: 'flex',
        // justifyContent: 'center',
        borderLeftWidth: 5,
        borderColor: 'grey',
    
      },
      incomeValue: {
        fontSize: 20,
        color: '#FFFFFF'
      },
})