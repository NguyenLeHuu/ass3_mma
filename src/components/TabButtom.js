import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/index";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import orchids from "../assets/data";
import Detail from "../screens/Detail";

const Tab = createMaterialBottomTabNavigator();
const DetailStack = createStackNavigator();

export const TabButtom = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.setItem("orchids", JSON.stringify(orchids))
        .then(() => console.log("Data saved successfully"))
        .catch((error) => console.log("Error saving data: ", error));
    }, 500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="white-content" />
      {/* <View style={{ flex: 0.15, backgroundColor: COLORS.primary }}></View> */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          // shifting={true}
          barStyle={{ backgroundColor: COLORS.primary, height: "7%" }}
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            style: {
              borderTopWidth: 1,
              borderTopColor: "lightgray",
            },
            labeled: false,
          }}
        >
          <Tab.Screen
            name="TabHomeStackScreen"
            component={TabHomeStackScreen}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={24} color="black" />
              ),
              tabBarLabel: null,
            }}
          />
          <Tab.Screen
            name="TabFavoriteStackScreen"
            component={TabFavoriteStackScreen}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({ color }) => (
                <AntDesign name="hearto" size={24} color="black" />
              ),
              tabBarLabel: null,
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export const TabHomeStackScreen = () => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <DetailStack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </DetailStack.Navigator>
  );
};

export const TabFavoriteStackScreen = () => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <DetailStack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </DetailStack.Navigator>
  );
};

// export default TabButtom;
