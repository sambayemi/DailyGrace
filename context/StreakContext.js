import React, {createContext,useState,useEffect} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const StreakContext=createContext()

export const StreakProvider=({children})=>{
const [streak,setStreak]=useState(0)

useEffect(()=>{
load()
},[])

const load=async()=>{
const s=await AsyncStorage.getItem("streak")
if(s)setStreak(Number(s))
}

const increase=async()=>{
const newStreak=streak+1
setStreak(newStreak)
await AsyncStorage.setItem("streak",String(newStreak))
}

return(
<StreakContext.Provider value={{streak,increase}}>
{children}
</StreakContext.Provider>
)
                           }
