import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../screens/HomeScreen"
import DevotionalScreen from "../screens/DevotionalScreen"
import BibleScreen from "../screens/BibleScreen"
import AffirmationScreen from "../screens/AffirmationScreen"
import PrayerWallScreen from "../screens/PrayerWallScreen"
import JournalScreen from "../screens/JournalScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Devotionals" component={DevotionalScreen}/>
      <Tab.Screen name="Bible" component={BibleScreen}/>
      <Tab.Screen name="Affirmations" component={AffirmationScreen}/>
      <Tab.Screen name="Prayer Wall" component={PrayerWallScreen}/>
      <Tab.Screen name="Journal" component={JournalScreen}/>
    </Tab.Navigator>
  )
}
