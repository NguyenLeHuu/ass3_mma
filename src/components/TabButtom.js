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
  Pressable,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
  Entypo,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/index";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Tab3 from "../screens/Tab3";
// import orchids from "../assets/data";
import orchids from "../assets/db";

import Detail from "../screens/Detail";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();
const DetailStack = createStackNavigator();

export const TabButtom = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      const jsonString = await AsyncStorage.getItem("orchids");
      if (jsonString === null) {
        AsyncStorage.setItem("orchids", JSON.stringify(orchids))
          .then(() => console.log("Data saved successfully"))
          .catch((error) => console.log("Error saving data: ", error));
      }
    }, 0);
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        backgroundColor={COLORS.lightPrimary}
        barStyle="dark-content"
      />
      {/* <View style={{ flex: 0.15, backgroundColor: COLORS.primary }}></View> */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          // shifting={true}
          barStyle={{ backgroundColor: COLORS.white, height: "7%" }}
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
              tabBarIcon: ({ focused }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  {focused ? (
                    <Ionicons name="home" size={28} color={COLORS.primary} />
                  ) : (
                    <Ionicons
                      name="home-outline"
                      size={28}
                      color={COLORS.black}
                    />
                  )}
                </TouchableOpacity>
              ),
              tabBarLabel: null,
            }}
          />
          <Tab.Screen
            name="TabFavoriteStackScreen"
            component={TabFavoriteStackScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Pressable onPress={() => navigation.navigate("Favorite")}>
                  {focused ? (
                    <AntDesign name="heart" size={28} color={COLORS.primary} />
                  ) : (
                    <AntDesign name="hearto" size={28} color={COLORS.black} />
                  )}
                </Pressable>
              ),
              tabBarLabel: null,
            }}
          />
          <Tab.Screen
            name="Tab3"
            component={Tab3}
            options={{
              tabBarIcon: ({ focused }) => (
                <Pressable onPress={() => navigation.navigate("Tab3")}>
                  {focused ? (
                    <Entypo name="image" size={28} color={COLORS.primary} />
                  ) : (
                    <Entypo name="image" size={28} color={COLORS.black} />
                  )}
                </Pressable>
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
