import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useForm, Resolver} from "react-hook-form";
import { TextInput, Button } from "@react-native-material/core";


type FormValues = {
    year: string
    income: string
    Regima: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.year ? values : {},
      errors: !values.year
        ? {
            firstName: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    }
  }

const HomePage = (): JSX.Element => {
    const { register, handleSubmit, reset, control, setValue } = useForm();
    return (
        <View style={styles.homePageContainer}>

            <View style={styles.inputContainer}>
               <View>
                   </View> 
            <TextInput label="Label"/>
            </View>
            <Button title="Proceed" style={styles.proceedButton} color='#4CAF50'/>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    homePageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
        height: '40%',
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 20,
        marginBottom: 100,
        backgroundColor: '#FFF'
    },
    proceedButton: {
        alignSelf: "center",
        marginTop: 40,
    }
})