import React from "react"
import {View,Text} from "react-native"

export default function PrayerCard({prayer}){
return(
<View style={{padding:15}}>
<Text>{prayer.text}</Text>
</View>
)
}
