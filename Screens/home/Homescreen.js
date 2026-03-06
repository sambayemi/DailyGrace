import React,{useContext} from "react"
import {View,Text,ScrollView,StyleSheet} from "react-native"
import {StreakContext} from "../context/StreakContext"
import verses from "../data/verses"

export default function HomeScreen(){

const {streak}=useContext(StreakContext)
const verse=verses[0]

return(
<ScrollView style={styles.container}>
<Text style={styles.title}>DailyGrace</Text>

<Text style={styles.section}>Verse of the Day</Text>
<Text>{verse.text}</Text>

<Text style={styles.section}>Reference</Text>
<Text>{verse.ref}</Text>

<Text style={styles.section}>Current Streak</Text>
<Text>{streak} days</Text>
</ScrollView>
)
}

const styles=StyleSheet.create({
container:{padding:20},
title:{fontSize:28,fontWeight:"bold"},
section:{marginTop:20,fontWeight:"bold"}
})
