import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/AppTabNavigator";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <SantaAnimation /> */}
        <AppContainer />
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  BottomTab: {
    screen: AppTabNavigator,
  },
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
