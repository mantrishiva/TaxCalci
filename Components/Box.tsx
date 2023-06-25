import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={[styles.card]}>
                <Text>Tap Tap</Text>

            </View>
        </View>
    )
}

export default Box

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        width: '30%'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        margin: 8,
        borderRadius: 10,
        backgroundColor: 'red'
    },
})