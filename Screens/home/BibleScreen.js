import React from "react"
import {ScrollView} from "react-native"
import verses from "../data/verses"
import VerseCard from "../components/VerseCard"

export default function BibleScreen(){
return(
<ScrollView>
{verses.map(v=><VerseCard key={v.ref} verse={v}/>)}
</ScrollView>
)
  }
