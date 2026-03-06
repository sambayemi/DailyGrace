import React,{useState,useEffect} from "react"
import {View,TextInput,Button,ScrollView} from "react-native"
import {db} from "../services/firebase"
import {collection,addDoc,getDocs} from "firebase/firestore"
import PrayerCard from "../components/PrayerCard"

export default function PrayerWallScreen(){

const [text,setText]=useState("")
const [prayers,setPrayers]=useState([])

const load=async()=>{
const snap=await getDocs(collection(db,"prayers"))
setPrayers(snap.docs.map(d=>({...d.data(),id:d.id})))
}

useEffect(()=>{load()},[])

const post=async()=>{
await addDoc(collection(db,"prayers"),{text})
setText("")
load()
}

return(
<View>
<TextInput placeholder="Prayer request" value={text} onChangeText={setText}/>
<Button title="Post" onPress={post}/>
<ScrollView>
{prayers.map(p=><PrayerCard key={p.id} prayer={p}/>)}
</ScrollView>
</View>
)
  }
