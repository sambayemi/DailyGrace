import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./navigation/TabNavigator"
import { StreakProvider } from "./context/StreakContext"

export default function App() {
  return (
    <StreakProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </StreakProvider>
  )
  }
