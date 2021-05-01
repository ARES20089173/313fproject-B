import React from 'react'
import { View, StyleSheet } from 'react-native'
import{ Picker } from '@react-native-community/picker'
export default function UnitsPicker({unitSystem,setUnitSystem}) {
    return (
        <View style={styles.unitSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item)=> setUnitSystem(item)}>
                <Picker.Item label="C°" value="metric"/>
                <Picker.Item label="F°" value="imperial"/>
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    unitSystem:{
        position:'absolute',
        top:100,
        left:-50,
        height:60,
        width:100
    }
})
