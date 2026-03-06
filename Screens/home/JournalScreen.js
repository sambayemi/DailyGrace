import React,{useState,useEffect} from "react"
import {View,TextInput,Button,ScrollView,Text} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function JournalScreen(){

const [entry,setEntry]=useState("")
const [list,setList]=useState([])

const load=async()=>{
const data=await AsyncStorage.getItem("journal")
if(data)setList(JSON.parse(data))
}

useEffect(()=>{load()},[])

const save=async()=>{
const newList=[...list,entry]
setList(newList)
await AsyncStorage.setItem("journal",JSON.stringify(newList))
setEntry("")
}

return(
<View>
<TextInput placeholder="Write prayer" value={entry} onChangeText={setEntry}/>
<Button title="Save" onPress={save}/>
<ScrollView>
{list.map((j,i)=><Text key={i}>{j}</Text>)}
</ScrollView>
</View>
)
  }
