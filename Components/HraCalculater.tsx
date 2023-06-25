import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from './Box'

const HraCalculater = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Box />
    </View>
  )
}

export default HraCalculater

const styles = StyleSheet.create({
    container: {
        width: "100%"
    }
})