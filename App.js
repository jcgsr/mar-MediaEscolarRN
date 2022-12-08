// 03.03.2022
// primero app meu Android e iOS
import React, { useEffect } from "react";

import Direta from "./src/components/Direta";
import Recuperacao from "./src/components/Recuperacao";
import Seis from "./src/components/Seis";
import Info from "./src/components/Info";
import Semestral from "./src/components/Semestral";

import { MaterialCommunityIcons } from "@expo/vector-icons";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// adMob
const Tab = createBottomTabNavigator();

const App = () => {
  // Android interstitial: ca-app-pub-2008019372085379/1871438530
  // Android banner: ca-app-pub-2008019372085379/2877398443
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
          name="Seis Notas"
          component={Seis}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="numeric-6-box-multiple"
                  size={24}
                  color="#ccc"
                />
              );
            },
            headerStyle: {
              backgroundColor: "#777",
            },
            headerTintColor: "#fffff9",
          }}
        />
        <Tab.Screen
          name="Semestral"
          component={Semestral}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color="#ccc"
                />
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
};

export default App;
