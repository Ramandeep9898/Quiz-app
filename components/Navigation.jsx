import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens";
import { CategoriesScreen, QuizScreen, FinalScreen } from "../screens";
import { CorrectAnswer } from "../screens/CorrectAnswer";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={HomeScreen} />
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Category" component={QuizScreen} />
    <Stack.Screen name="ScoreCard" component={FinalScreen} />
    <Stack.Screen name="CheckAnswer" component={FinalScreen} />
    <Stack.Screen name="CorrectAnswer" component={CorrectAnswer} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={StackNavigator} />
    <Tab.Screen name="CategoriesTab" component={CategoriesScreen} />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

export default RootNavigator;
