import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PanGesture from "../screens/PanGesture";
import Transitions from "../screens/Transitions";
import Animations from "../screens/Animations";

const Stack = createNativeStackNavigator();

export type RootStackParams = {
  Home: undefined;
  PanGesture: undefined;
  Transitions: undefined;
  Animations: undefined;
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PanGesture" component={PanGesture} />
        <Stack.Screen name="Transitions" component={Transitions} />
        <Stack.Screen name="Animations" component={Animations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
