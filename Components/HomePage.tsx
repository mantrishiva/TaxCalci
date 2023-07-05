import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from './theame'

type FormData = {
    Year: string;
    totalIncome: string;
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
    } = useForm<FormData>();
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
                        </View>
                    )}
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
                    rules={{ required: 'Last name is required' }}
                    defaultValue=""
                />
            </View>

            <View>
                <Button color={colors.primary} title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    placeholderStyles: {
        color: "grey",
    },
    dropdownGender: {
        marginHorizontal: 10,
        width: "70%",
        marginBottom: 15,
        zIndex: 3,
        color: '#000000'
    },
    dropdownCompany: {
        marginHorizontal: 10,
        marginBottom: 15,
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
        zIndex: 3
    },
    incomeContainer: {
        display: "flex",
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textfield: {
        zIndex: 1,
        width: 150,
        marginLeft: 12,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        // position: 'absolute'
    },
    labels: {
        color: colors.fontColor,
        fontFamily: colors.fontFamily,
        fontWeight: "bold",
        fontSize: 16
    }
});

export default HomePage;
