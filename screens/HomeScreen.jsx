import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is HomeScreen</Text>
      <Button
        title="Change password"
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
      />
    </View>
  );
};

export default HomeScreen;
