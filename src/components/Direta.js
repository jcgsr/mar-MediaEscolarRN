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

const Direta = () => {
  // useEffect(() => {
  //   setTestDeviceIDAsync("EMULATOR");
  // }, []);

  // 1º Semestre
  const [grade1, setGrade1] = useState(0);
  const [grade2, setGrade2] = useState(0);
  const total1 = grade1 + grade2;
  const average1 = total1 / 2;

  const grade1Ref = useRef(null);
  const grade2Ref = useRef(null);

  // 2º Semestre
  const [grade3, setGrade3] = useState(0);
  const [grade4, setGrade4] = useState(0);
  const total2 = grade3 + grade4;
  const average2 = total2 / 2;

  const grade3Ref = useRef(null);
  const grade4Ref = useRef(null);

  // média geral
  const average = (average1 + average2) / 2;

  // arredondar
  const round = (num, dec = 0) => {
    let p = Math.pow(10, dec);
    return Math.round(num * p) / p;
  };

  const handleDelete = () => {
    grade1Ref.current.clear();
    grade1Ref.current.focus();
    grade2Ref.current.clear();
    grade3Ref.current.clear();
    grade4Ref.current.clear();
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
          <View style={styles.viewSem1}>
            <TextInput
              placeholder="1ª nota"
              placeholderTextColor="#888"
              onFocus={() => grade1Ref.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={grade1Ref}
              style={styles.input}
              onChangeText={(text) => setGrade1(parseFloat(text))}
              onSubmitEditing={() => grade2Ref.current.focus()}
            />
            <TextInput
              placeholder="2ª nota"
              placeholderTextColor="#888"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade2Ref}
              style={styles.input}
              onChangeText={(text) => setGrade2(parseFloat(text))}
              onSubmitEditing={() => grade3Ref.current.focus()}
            />

            <View>
              <Text style={styles.txtH2}>Média 1º Sem.</Text>
              <Text style={styles.average}> {round(average1, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}

          {/* 2º Semestre */}
          <View style={styles.viewSem2}>
            <TextInput
              placeholder="3ª nota"
              placeholderTextColor="#888"
              onFocus={() => grade3Ref.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={grade3Ref}
              style={styles.input}
              onChangeText={(text) => setGrade3(parseFloat(text))}
              onSubmitEditing={() => grade4Ref.current.focus()}
            />
            <TextInput
              placeholder="4ª nota"
              placeholderTextColor="#888"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade4Ref}
              style={styles.input}
              onChangeText={(text) => setGrade4(parseFloat(text))}
            />

            <View>
              <Text style={styles.txtH2}>Média 2º Sem.</Text>
              <Text style={styles.average}> {round(average2, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Direta;

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
  viewSem1: {
    width: "50%",
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
