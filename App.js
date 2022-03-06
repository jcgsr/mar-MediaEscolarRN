// 03.03.2022
// primero app meu Android e iOS
import React, { useState, useRef } from "react";
// import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Direta from "./src/components/Direta";
import Recuperacao from "./src/components/Recuperacao";
import Info from "./src/components/Info";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// <MaterialCommunityIcons name="emoticon-angry" size={24} color="black" />

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#DFDEEB",
          tabBarStyle: {
            backgroundColor: "#3F5656",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Aprovação Direta"
          component={Direta}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="emoticon-happy"
                  size={24}
                  color="#008B8B"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#2D6769",
            },
            headerTintColor: "#008B8B",
          }}
        />
        <Tab.Screen
          name="Recuperação"
          component={Recuperacao}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="emoticon-angry"
                  size={24}
                  color="#401A3E"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#611F7D",
            },
            headerTintColor: "#AE27E8",
          }}
        />
        <Tab.Screen
          name="Informações"
          component={Info}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="#407EC1"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#182879",
            },
            headerTintColor: "#407EC1",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#008B8B",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   scrollView: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     width: "100%",
//   },
// });
