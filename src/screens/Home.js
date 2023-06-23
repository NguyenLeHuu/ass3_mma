import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../constants";
const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orchids, setOrchids] = useState([]);
  const isFocused = useIsFocused();

  const getData = async () => {
    console.log("homeScreen-fetch data");
    try {
      const jsonString = await AsyncStorage.getItem("orchids");
      if (jsonString !== null) {
        const parsedArray = JSON.parse(jsonString);
        // console.log("Array retrieved successfully: ");
        setOrchids(parsedArray);
      } else {
        console.log("Array does not exist");
      }
    } catch (error) {
      console.log("Error retrieving array: ", error);
    }
  };

  useEffect(() => {
    getData();
    setTimeout(() => setIsLoading(false), 500);
    // setIsLoading(false);
  }, [isFocused]);
  const handlePress = async (id) => {
    orchids.forEach((item, index) => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    setOrchids(orchids);
    await AsyncStorage.setItem("orchids", JSON.stringify(orchids))
      .then(() => console.log("Data changed successfully"))
      .catch((error) => console.log("Error saving data: ", error));
    await getData();
  };

  useEffect(() => {
    renderItem;
  }, [orchids]);
  const renderItem = ({ item }) => {
    // console.log("render");
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Detail", {
            data: item.id,
          });
        }}
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 20,
          backgroundColor: COLORS.secondary,
          borderRadius: 50,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={{
              uri:
                item?.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SpmjR1qryESMLE7EQ6IVXO-gednZHwqtaA&usqp=CAU",
            }}
            style={{
              width: 100,
              height: 70,
              resizeMode: "contain",
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{ flex: 1, marginLeft: 10, justifyContent: "space-evenly" }}
        >
          <Text>{item.name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
          }}
          onPress={() => handlePress(item?.id)}
        >
          {item.isFavorite === true ? (
            <AntDesign name="heart" size={28} color={COLORS.primary} />
          ) : (
            <AntDesign name="hearto" size={28} color="black" />
          )}
        </TouchableOpacity>
      </Pressable>
    );
  };

  if (isLoading) {
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />

      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>;
  } else {
    return (
      <View>
        <FlatList
          style={{
            marginTop: 20,
            marginHorizontal: 10,
          }}
          showsVerticalScrollIndicator={false}
          data={orchids}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
};
export default Home;
