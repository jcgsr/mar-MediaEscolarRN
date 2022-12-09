import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// adMob
// import {
//   // AdMobInterstitial,
//   AdMobBanner,
//   setTestDeviceIDAsync,
// } from "expo-ads-admob";

const Semestral = () => {
  // useEffect(() => {
  //   setTestDeviceIDAsync("EMULATOR");
  // }, []);

  // 1º Semestre
  const [sem1, setSem1] = useState(0);

  const sem1Ref = useRef(null);

  // 2º Semestre
  const [sem2, setSem2] = useState(0);

  const sem2Ref = useRef(null);

  // média geral
  const average = (sem1 + sem2) / 2;

  // arredondar
  const round = (num, dec = 0) => {
    let p = Math.pow(10, dec);
    return Math.round(num * p) / p;
  };

  const handleDelete = () => {
    sem1Ref.current.clear();
    sem1Ref.current.focus();
    sem2Ref.current.clear();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* <AdMobBanner
            bannerSize="smartBanner"
            adUnitID="ca-app-pub-2008019372085379/2877398443"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          /> */}
          {/* 1º Semestre */}
          <View style={styles.viewSem}>
            <TextInput
              placeholder="Média 1º Semestre"
              placeholderTextColor="#888"
              onFocus={() => sem1Ref.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={sem1Ref}
              style={styles.input}
              onChangeText={(text) => setSem1(parseFloat(text))}
              onSubmitEditing={() => sem2Ref.current.focus()}
            />
            <TextInput
              placeholder="Média 2º Semestre"
              placeholderTextColor="#888"
              keyboardType="numeric"
              selectTextOnFocus
              ref={sem2Ref}
              style={styles.input}
              onChangeText={(text) => setSem2(parseFloat(text))}
            />

            <View style={styles.viewAverage}>
              <Text style={styles.txtAverage}>Média Geral</Text>
              <Text style={styles.generalAverage}> {round(average, 2)}</Text>
              <Text style={styles.txtHR}></Text>
              <View style={styles.view}>
                <TouchableOpacity style={styles.btn} onPress={handleDelete}>
                  <Text style={styles.btnText}>Apagar Notas</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <AdMobBanner
              bannerSize="smartBanner"
              adUnitID="ca-app-pub-2008019372085379/2877398443"
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={(e) => console.log(e)}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Semestral;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: "#c1c1c1",
  },
  viewSem: {
    width: "100%",
    backgroundColor: "#efeff1",
  },
  viewSem2: {
    width: "50%",
    backgroundColor: "#efeff5",
  },
  viewAverage: {
    width: "100%",
    backgroundColor: "#efeff9",
  },
  scrollView: {
    // marginHorizontal: 20,
    // marginBottom: 20,
    // width: "100%",
  },
  txtH1: {
    color: "#7CD0CC",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
  },
  txtH2: {
    color: "#000",
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  input: {
    margin: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 2,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  average: {
    fontSize: 65,
    color: "#000",
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  generalAverage: {
    fontSize: 75,
    fontWeight: "bold",
    color: "#000",
    // textShadowColor: "rgba(90, 90, 90, 0.75)",
    // textShadowOffset: { width: 4, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  txtAverage: {
    fontSize: 20,
    marginTop: 30,
    color: "#000",
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    // textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  txtHR: {
    height: 1,
    width: "90%",
    backgroundColor: "#CACAD5",
    margin: 20,
  },
  scrollView: {
    // marginHorizontal: 20,
    // marginBottom: 20,
    // width: "90%",
  },
  btn: {
    height: 40,
    width: "50%",
    backgroundColor: "#666",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontSize: 15,
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
