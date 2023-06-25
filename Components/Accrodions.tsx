import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";


const Accrodions = ({ title= "", data= "" }) : JSX.Element => {
    const [open, setOpen] = useState(false)
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open)
    }
    return (
        <View>
            <TouchableOpacity  style={styles.row} onPress={() => toggleExpand()}>
                <Text style={[styles.title]}>{title}</Text>
                
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {
                open &&
                <View style={styles.child}>
                    <Text>{data}</Text>
                </View>
            }
        </View>
    )
}

export default Accrodions

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3A3B3C',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
    },
    parentHr: {
        height: 1,
        color: '#3A3B3C',
        width: '100%'
    },
    child: {
        backgroundColor: '#3A3B3C',
        padding: 16,
    }

});
