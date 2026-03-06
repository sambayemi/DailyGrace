import React from "react"
import {View,Text} from "react-native"

export default function VerseCard({verse}){
return(
<View style={{padding:20}}>
<Text>{verse.text}</Text>
<Text>{verse.ref}</Text>
</View>
)
  }
