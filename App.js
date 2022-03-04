// 03.03.2022
// primero app meu Android e iOS
import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Direta from "./src/components/Direta";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Aprovação Direta" component={Direta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008B8B",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
});
