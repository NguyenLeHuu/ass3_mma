import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TabButtom,
  TabHomeStackScreen,
  TabFavoriteStackScreen,
} from "./src/components/TabButtom";
import Home from "./src/screens/Home";
import Favorite from "./src/screens/Favorite";
import Detail from "./src/screens/Detail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TabButtom />
      {/* <Stack.Navigator
        initialRouteName="TabButtom"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="TabButtom"
          component={TabButtom}
          options={{ unmountOnBlur: true }}
        />
        <Stack.Screen
          name="TabHomeStackScreen"
          component={TabHomeStackScreen}
          options={{ unmountOnBlur: true }}
        />
        <Stack.Screen
          name="TabFavoriteStackScreen"
          component={TabFavoriteStackScreen}
          options={{ unmountOnBlur: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ unmountOnBlur: true }}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{ unmountOnBlur: true }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ unmountOnBlur: true }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
