import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Ionicons} from '@expo/vector-icons'

export default function ReloadIcon({load}) {
    return (
        <View style={styles.reloadIcon}>
          <Ionicons onPress={load} name="refresh-circle-outline" size={50} color="red" />
        </View>
    )
}
const styles = StyleSheet.create({
    reloadIcon:{
        position:"absolute",
        top:100,
        left:210
    }
})

