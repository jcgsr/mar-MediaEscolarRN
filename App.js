// 03.03.2022
// primero app meu Android e iOS
import React from "react";

import Direta from "./src/components/Direta";
import Recuperacao from "./src/components/Recuperacao";
import Info from "./src/components/Info";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            backgroundColor: "#444",
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
                  name="run-fast"
                  size={24}
                  color="#ccc"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#555",
            },
            headerTintColor: "#efeff9",
          }}
        />
        <Tab.Screen
          name="Recuperação"
          component={Recuperacao}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="rowing" size={24} color="#ccc" />
              );
            },
            headerStyle: {
              backgroundColor: "#777",
            },
            headerTintColor: "#fffff9",
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
                  color="#ccc"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#999",
            },
            headerTintColor: "#222",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
