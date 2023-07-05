import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import React from 'react'

const CustomInput = ({ control, name, placeholder, secureTextEntry }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange, onBlur } }) =>
                    <TextInput
                        underlineColorAndroid="transparent"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        editable
                        style={styles.input}
                        placeholder={placeholder} />}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
})