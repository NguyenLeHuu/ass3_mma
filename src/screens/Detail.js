import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Detail = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orchids, setOrchids] = useState([]);
  const [item, setItem] = useState();
  const isFocused = useIsFocused();
  let id = route.params.data;

  const getData = async () => {
    // console.log("detaiScreen-fetch data");
    try {
      const jsonString = await AsyncStorage.getItem("orchids");
      if (jsonString !== null) {
        const parsedArray = JSON.parse(jsonString);
        setOrchids(parsedArray);
        const itemDB = parsedArray.find((item, index) => item.id === id);
        setItem(itemDB);
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
      // .then(() => console.log("Data changed successfully"))
      .catch((error) => console.log("Error saving data: ", error));
    await getData();
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
      <StatusBar
        backgroundColor={COLORS.lightPrimary}
        barStyle="dark-content"
      />

      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor="#cc6937" barStyle="white-content" /> */}
        <View
          style={{
            flex: 0.25,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons
                name="ios-arrow-back-sharp"
                size={23}
                fontWeight="100"
                color="white"
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 23,
                color: COLORS.white,
                fontWeight: 400,
              }}
            >
              Details
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FAE1E1",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            alignSelf: "center",
            position: "absolute",
            top: "10%",
            left: "5%",
            right: "5%",
            bottom: "3%",

            borderRadius: 10,
            shadowColor: "red",
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5, // Áp dụng bóng trên Android
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.8 }}>
              <Image
                source={{
                  uri:
                    item?.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SpmjR1qryESMLE7EQ6IVXO-gednZHwqtaA&usqp=CAU",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                // backgroundColor: "#3333",
                marginTop: 50,
                marginHorizontal: 20,
                flex: 1,
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
              </View>
              {/* <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 28 }}>{item?.price}</Text>
            </View> */}
              <ScrollView style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 18 }}>{item?.description}</Text>
              </ScrollView>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: "center",
                alignItems: "flex-end",
                marginBottom: 20,
              }}
            >
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
                  <AntDesign name="hearto" size={28} color={COLORS.primary} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};
export default Detail;
