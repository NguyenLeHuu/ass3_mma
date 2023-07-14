import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const navigation = useNavigation();
  const { navigateName, screen } = props;

  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: navigateName }],
    });
    navigation.navigate(navigateName, { screen });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} {...props} onPress={handlePress} />
  );
};

export default CustomButton;
