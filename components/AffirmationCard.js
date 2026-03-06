import React from "react"
import {View,Text} from "react-native"

export default function AffirmationCard({affirmation}){
return(
<View style={{padding:20}}>
<Text>{affirmation.text}</Text>
<Text>{affirmation.ref}</Text>
</View>
)
  }
