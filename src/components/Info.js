import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.txtH1}>Instruções</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141C41",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
  txtH1: {
    color: "#96A5EF",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
  },
  txtH2: {
    color: "#7CD0CC",
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
  },

  txtHR: {
    height: 1,
    width: "100%",
    backgroundColor: "#3DF3ED",
    margin: 20,
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 20,
    width: "90%",
  },
  btn: {
    height: 40,
    width: "50%",
    backgroundColor: "#0C3231",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    marginBottom: 20,
  },
  btnText: {
    color: "#7CD0CC",
    fontSize: 20,
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
