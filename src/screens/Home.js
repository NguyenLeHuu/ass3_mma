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
  Feather,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../constants";
import { category } from "../assets/data";
const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orchids, setOrchids] = useState([]);
  const [data, setData] = useState([]);
  const [active, setActive] = useState("All");
  const isFocused = useIsFocused();

  const getData = async () => {
    try {
      const jsonString = await AsyncStorage.getItem("orchids");
      if (jsonString !== null) {
        const parsedArray = JSON.parse(jsonString);
        setOrchids(parsedArray);
      } else {
        console.log("Array does not exist");
      }
    } catch (error) {
      console.log("Error retrieving array: ", error);
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    getData();
    setTimeout(() => setIsLoading(false), 300);
  }, [isFocused]);
  const handlePress = async (id) => {
    orchids.forEach((item, index) => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    setOrchids(orchids);
    await AsyncStorage.setItem("orchids", JSON.stringify(orchids)).catch(
      (error) => console.log("Error saving data: ", error)
    );
    await getData();
  };

  useEffect(() => {
    if (active !== "All") {
      const arr = orchids.filter((item, index) => item.category === active);
      setData(arr);
    } else {
      setData(orchids);
    }
    renderItem;
  }, [orchids]);
  const renderItem = ({ item }) => {
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
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        {/* <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" /> */}

        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  } else if (data.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.3,
            marginHorizontal: 10,

            // backgroundColor: COLORS.primary,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AntDesign name="menu-fold" size={24} color="black" />
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: COLORS.primary,
                }}
              >
                LeeOrchidD
              </Text>
              <Text style={{ fontSize: 25, fontWeight: "500" }}>oo</Text>
            </View>

            <Feather name="shopping-bag" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.lightGray,
                flex: 1,
                padding: 15,
                borderRadius: 8,
                marginRight: 20,
              }}
            >
              <View>
                <Feather name="search" size={24} color="black" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text>Search orchid</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.lightPrimary,
                padding: 15,
                borderRadius: 8,
                opacity: 0.6,
              }}
            >
              <Ionicons name="filter-sharp" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "space-between",
              marginBottom: -20,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity
                onPress={() => {
                  setData(orchids);
                  setActive("All");
                }}
              >
                <View
                  style={{
                    marginRight: 25,
                    padding: 10,
                  }}
                >
                  {active === "All" ? (
                    <Text style={{ color: COLORS.primary }}>All</Text>
                  ) : (
                    <Text>All</Text>
                  )}
                </View>
              </TouchableOpacity>
              {category.map((cateItem, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    const arr = orchids.filter(
                      (item, index) => item.category === cateItem
                    );
                    setData(arr);
                    setActive(cateItem);
                    // getData();
                  }}
                >
                  <View
                    style={{
                      marginRight: 25,
                      padding: 10,
                    }}
                  >
                    {active === cateItem ? (
                      <Text style={{ color: COLORS.primary }}>{cateItem}</Text>
                    ) : (
                      <Text>{cateItem}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <FlatList
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
          // data={orchids}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
};
export default Home;
