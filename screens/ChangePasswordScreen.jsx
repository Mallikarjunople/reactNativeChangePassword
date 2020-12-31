import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { Controller, useForm } from "react-hook-form";

const ChangePasswordScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();

  const [visibleOld, setVisibleOld] = useState(false);
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleRepeat, setVisibleRepeat] = useState(false);

  const windowWidth = Dimensions.get("window").width;

  const onSubmit = (data) => {
    data.newPassword != data.repeatNewPassword
      ? Alert.alert("Sorry", "Password don't match.")
      : Alert.alert("Success", "Password Changed Successfully .")
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 18 }}>Old password</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={visibleOld}
            />
          )}
          name="oldPassword"
          rules={{ required: true }}
          defaultValue=""
        />
        <AntDesign
          style={{
            position: "absolute",
            right: 20,
            top: 50,
          }}
          name={visibleOld ? "eye" : "eyeo"}
          size={24}
          color="black"
          onPress={() => setVisibleOld(!visibleOld)}
        />
        {errors.oldPassword && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <View>
        <Text style={{ fontSize: 18 }}>New password</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={visibleNew}
            />
          )}
          name="newPassword"
          rules={{ required: true }}
          defaultValue=""
        />
        <AntDesign
          style={{
            position: "absolute",
            right: 20,
            top: 50,
          }}
          name={visibleNew ? "eye" : "eyeo"}
          size={24}
          color="black"
          onPress={() => setVisibleNew(!visibleNew)}
        />
        {errors.newPassword && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Repeat New password</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={visibleRepeat}
            />
          )}
          name="repeatNewPassword"
          defaultValue=""
        />
        <AntDesign
          style={{
            position: "absolute",
            right: 20,
            top: 50,
          }}
          name={visibleRepeat ? "eye" : "eyeo"}
          size={24}
          color="black"
          onPress={() => setVisibleRepeat(!visibleRepeat)}
        />
        {errors.repeatNewPassword && (
          <Text style={{ color: "red" }}>This is required.</Text>
        )}
      </View>

      <View
        style={{
          flex: 1,
          width: "90%",
          height: 40,
          color: "white",
          position: "absolute",
          bottom: 35,
        }}
      >
        <Button title="Save" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },

  contentPosition: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    margin: 10,
    padding: 10,
    borderColor: "gray",
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default ChangePasswordScreen;
