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
  Alert,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";
import { useIsFocused } from "@react-navigation/native";
const Tab3 = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orchids, setOrchids] = useState([]);
  const [data, setData] = useState([]);
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
    if (orchids.length > 0) {
      const arr = orchids.filter((e) => e.isTopOfTheWeek === true);
      const fillArr = arr.sort((a, b) => {
        if (parseFloat(b.rating) === parseFloat(a.rating)) {
          return a.price - b.price;
        } else {
          return parseFloat(b.rating) - parseFloat(a.rating);
        }
      });

      setData(fillArr);
    }
  }, [orchids]);

  useEffect(() => {
    setIsLoading(true);
    getData();
    setTimeout(() => setIsLoading(false), 300);
  }, [isFocused]);

  const handlePress = async (id) => {
    orchids.forEach((item, index) => {
      if (item.id === id) {
        item.isTab3 = !item.isTab3;
      }
      return item;
    });
    setOrchids(orchids);
    await AsyncStorage.setItem("orchids", JSON.stringify(orchids))
      // .then(() => console.log("Data changed successfully"))
      .catch((error) => console.log("Error saving data: ", error));
    await getData();
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Warning", "Remove all from list ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Remove",
        onPress: async () => {
          const arr = [];
          setData(arr);
          orchids.forEach((item, index) => {
            item.isTab3 = false;
            return item;
          });
          await AsyncStorage.setItem("orchids", JSON.stringify(orchids))
            // .then(() => console.log("Data changed successfully"))
            .catch((error) => console.log("Error saving data: ", error));
          await getData();
        },
      },
    ]);

  useEffect(() => {
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
          {item.isTab3 === true ? (
            // <AntDesign name="heart" size={28} color={COLORS.primary} />
            <Feather name="x-circle" size={28} color={COLORS.primary} />
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
        <StatusBar
          backgroundColor={COLORS.lightPrimary}
          barStyle="dark-content"
        />

        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  } else if (data.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        {/* <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 20,
          }}
          onPress={async () => {
            const arr = [];
            setData(arr);
            orchids.forEach((item, index) => {
              item.isTab3 = false;
              return item;
            });
            await AsyncStorage.setItem("orchids", JSON.stringify(orchids))
              .then(() => console.log("Data changed successfully"))
              .catch((error) => console.log("Error saving data: ", error));
            await getData();
          }}
        > */}
        {/* Nội dung của nút xóa */}
        {/* Ví dụ: */}
        {/* <Text style={{ color: "white" }}>Clear All</Text>
        </TouchableOpacity> */}
        <View
          style={{
            flex: 0.15,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 25,
                  color: COLORS.white,
                  fontWeight: 400,
                }}
              >
                Tab3 List
              </Text>
            </View>
            {/* <TouchableOpacity
              style={{ opacity: 0.7, padding: 10 }}
              onPress={createTwoButtonAlert}
            >
              <MaterialIcons name="delete-outline" size={35} color="white" />
            </TouchableOpacity> */}
          </View>
        </View>
        <FlatList
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            flex: 1,
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.17,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 25,
                  color: COLORS.white,
                  fontWeight: 400,
                }}
              >
                Tab3 List
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
          <View>
            <Image
              source={require("./../assets/images/empty.png")}
              style={{
                width: 200,
                height: 200,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              There are no Tab3 flowers!
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default Tab3;
