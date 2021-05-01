import React from 'react'
import { View, Text ,StyleSheet,Button} from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
const {PRIMARY_COLOR,SECONDARY_COLOR,BORDER_COLOR}=colors
export default function WeatherDetails({currentWeather,unitSystem}) {
 
    const {
        main:{fells_like, humidity},
        wind:{speed,pressure },
    }=currentWeather
    const windSpeed = unitSystem === 'metric' ? `${Math.round(speed)} m/s` :  `${Math.round(speed)} miles/hour`
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBox}>
                <FontAwesome5 name="temperature-low" size={30} color={PRIMARY_COLOR}/>
                <View style={styles.weatherDetailsItems}>
                    <Text style={styles.textSecond}> Feels like:{fells_like}123456</Text>
                </View>

                </View>
                <View style={{...styles.weatherDetailsBox,borderRightWidth:0,borderBottomWidth:1}}>
                <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR}/> 
                <View style={styles.weatherDetailsItems}>
                    <Text style={styles.textSecond}>Humidity: {humidity}1</Text>
                </View>
               
                </View>
            </View>
            <View style={styles.weatherDetailsRow}>
                <View style={styles.weatherDetailsBox}>
                <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR}/>
                <View style={{...styles.weatherDetailsBox,borderRightWidth:0,borderBottomWidth:0,}}>
                    <Text style={styles.textSecond}>windSpeed:{windSpeed}</Text>

                </View>

                </View>
                <View style={{...styles.weatherDetailsBox,borderRightWidth:0,borderBottomWidth:0}}>
                <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR}/>
                <View style={styles.weatherDetailsItems}>
                    <Text style={styles.textSecond}>pressure:{pressure}1hpa</Text>
                </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    weatherDetails:{
        marginTop:'auto',
        borderWidth:1,
        margin:20,
        borderColor:BORDER_COLOR,
        borderRadius:0,
    },
    weatherDetailsRow:{
        flexDirection:'row',
        alignItems:"center",
    },
    
    weatherDetailsBox:{
        paddingTop:20,
        paddingBottom:20,
        width:150,
        paddingRight:15,
        paddingLeft:15,
        borderRadius:0,
        borderRightWidth:1,
        borderBottomWidth:1,
        
    },
    weatherDetailsItems: {
        alignItems:"flex-end",
        justifyContent:"flex-end",
    },
    textSecond:{
        fontSize:15,
        margin:1,
        fontWeight:"700",
        color:SECONDARY_COLOR
    }
})
