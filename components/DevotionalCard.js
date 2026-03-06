import React from "react"
import {View,Text} from "react-native"

export default function DevotionalCard({devotional}){
return(
<View style={{padding:20}}>
<Text>{devotional.title}</Text>
<Text>{devotional.scripture}</Text>
<Text>{devotional.message}</Text>
<Text>{devotional.prayer}</Text>
</View>
)
}
