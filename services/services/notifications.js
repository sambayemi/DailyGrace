import * as Notifications from "expo-notifications"

export async function register(){
await Notifications.requestPermissionsAsync()
}
