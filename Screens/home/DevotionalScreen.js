import React from "react"
import {ScrollView} from "react-native"
import devotionals from "../data/devotionals"
import DevotionalCard from "../components/DevotionalCard"

export default function DevotionalScreen(){
return(
<ScrollView>
{devotionals.map(d=><DevotionalCard key={d.id} devotional={d}/>)}
</ScrollView>
)
}
