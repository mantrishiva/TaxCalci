import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import { colors } from './theame'
import { Flex } from '@react-native-material/core';

type FormData = {
    Year: string;
    totalIncome: string;
    regima: string;
};

const data = [
    { label: '2022-2023', value: '2022-2023' },
    { label: '2023-2024', value: '2023-2024' }
];

export type Mode = {
    onBlur: "onBlur"
    onChange: "onChange"
    onSubmit: "onSubmit"
    onTouched: "onTouched"
    all: "all"
}



const HomePage: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues:{
            regima: 'new'
        }
    });
    const [genderOpen, setGenderOpen] = useState(false);
    const [year, setGenderValue] = useState(null);
    const [gender, setGender] = useState([
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Prefer Not to Say", value: "neutral" },
    ]);


    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    // useEffect(() => {
    //     setGenderOpen(false)
    // }, [year])

    console.log('control', control._getWatch());

    console.log('year', year);


    return (
        <View style={styles.container}>
            <View style={styles.yearDropDown}>
                <View>
                    <Text style={styles.labels}>Year: </Text>
                </View>
                <Controller
                    name="Year"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownGender}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={genderOpen}
                                value={year} //genderValue
                                items={data}
                                setOpen={setGenderOpen}
                                setValue={setGenderValue}
                                setItems={setGender}
                                placeholder="Select Year"
                                placeholderStyle={styles.placeholderStyles}
                                onChangeValue={(item: any) => {
                                    console.log(item);
                                    onChange(item)
                                }}
                                zIndex={3000}
                                zIndexInverse={1000}
                            />
                            {errors.Year && (
                                <Text style={{ color: 'red' }}>{errors.Year.message}</Text>
                            )}
                        </View>
                    )}
                    rules={{ required: 'Year is required' }}
                />
            </View>
            <View style={styles.incomeContainer}>
                <View>
                    <Text style={styles.labels}>Total Income:</Text>
                </View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                style={styles.textfield}
                                value={value}
                                placeholder="Total Income"
                            />
                            {errors.totalIncome && (
                                <Text style={{ color: 'red' }}>{errors.totalIncome.message}</Text>
                            )}
                        </View>
                    )}
                    name="totalIncome"
                    rules={{ required: 'Total income is required' }}
                    defaultValue=""
                />
            </View>
            <Controller
                control={control}
                render={({ field: { value, onChange } }) => (
                    <>
                        <RadioButton.Group onValueChange={onChange} value={value}>
                            <View style={styles.regimaStyles}>
                                <View style={styles.alignRadio}>
                                    <RadioButton.Item label="" style={styles.radio} value="new" />
                                    <Text style={styles.labels}>new</Text>
                                </View>
                                <View style={styles.alignRadio}>
                                    <RadioButton.Item label="" style={styles.radio} value="old" />
                                    <Text style={styles.labels}>old</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </>
                )}
                name='regima'
                defaultValue=""
            />
            <View style={styles.submitButton}>
                <Button color={colors.primary} title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5
    },
    placeholderStyles: {
        color: "grey",
    },
    dropdownGender: {
        marginHorizontal: 5,
        width: "70%",
        marginBottom: 15,
        zIndex: 3,
        color: '#000000'
    },
    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
        width: '100%',
        zIndex: 100,
    },
    getStarted: {
        backgroundColor: "#5188E3",
        color: "white",
        textAlign: "center",
        marginHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 20,
    },
    yearDropDown: {
        display: "flex",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 3,
        marginLeft: 7
    },
    incomeContainer: {
        display: "flex",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textfield: {
        zIndex: 1,
        width: 230,
        marginLeft: 12,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: 10
        // position: 'absolute'
    },
    labels: {
        color: colors.fontColor,
        fontFamily: colors.fontFamily,
        fontWeight: "bold",
        fontSize: 16
    },
    regimaStyles: {
        display: 'flex',
        flexDirection: 'row'
    },
    alignRadio: {
        flexDirection: 'row',
        width: '30%',
        marginTop: 15,
        // backgroundColor: '#fff'
        // justifyContent: 'flex-end'
        // justifyContent: 'center'
    },
    radio: {
        // backgroundColor: 'red',
        height: 30,
        width:50,
        paddingLeft:5,
        // backgroundColor: 'red'
    },
    submitButton: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 20
    }
});

export default HomePage;
