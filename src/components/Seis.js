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
// import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Seis = () => {
  // useEffect(() => {
  //   setTestDeviceIDAsync("EMULATOR");
  // }, []);
  // 1º Semestre
  // Diretas
  const [grade1D, setGrade1D] = useState(0);
  const [grade2D, setGrade2D] = useState(0);
  const [grade3D, setGrade3D] = useState(0);
  const total1D = grade1D + grade2D + grade3D;
  const average1D = total1D / 3;

  const grade1DRef = useRef(null);
  const grade2DRef = useRef(null);
  const grade3DRef = useRef(null);

  // Recuperação
  const [grade1, setGrade1] = useState(0);
  const [grade2, setGrade2] = useState(0);
  const [grade3, setGrade3] = useState(0);
  const [rec1, setRec1] = useState(0);
  const total1 = grade1 + grade2 + grade3;
  const average1 = total1 / 3;
  const averageRec1 = (average1 + rec1) / 2;

  const grade1Ref = useRef(null);
  const grade2Ref = useRef(null);
  const grade3Ref = useRef(null);
  const rec1Ref = useRef(null);

  // 2º Semestre
  // Diretas
  const [grade4D, setGrade4D] = useState(0);
  const [grade5D, setGrade5D] = useState(0);
  const [grade6D, setGrade6D] = useState(0);

  const total2D = grade4D + grade5D + grade6D;
  const average2D = total2D / 3;

  const grade4DRef = useRef(null);
  const grade5DRef = useRef(null);
  const grade6DRef = useRef(null);

  // Recuperação
  const [grade4, setGrade4] = useState(0);
  const [grade5, setGrade5] = useState(0);
  const [grade6, setGrade6] = useState(0);
  const [rec2, setRec2] = useState(0);
  const total2 = grade4 + grade5 + grade6;
  const average2 = total2 / 3;
  const averageRec2 = (average2 + rec2) / 2;

  const grade4Ref = useRef(null);
  const grade5Ref = useRef(null);
  const grade6Ref = useRef(null);

  const rec2Ref = useRef(null);

  // média geral
  const averageD = (average1D + average2D) / 2;
  const average = (averageRec1 + averageRec2) / 2;

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
    grade1DRef.current.focus();
    grade2DRef.current.clear();
    grade3DRef.current.clear();
    rec1Ref.current.clear();
    grade4Ref.current.clear();
    grade5Ref.current.clear();
    grade6Ref.current.clear();
    grade4DRef.current.clear();
    grade5DRef.current.clear();
    grade6DRef.current.clear();
    rec2Ref.current.clear();
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
          <Text style={styles.txtH1}>Aprovação Direta</Text>
          <View style={styles.viewSem1}>
            <TextInput
              placeholder="1ª nota"
              placeholderTextColor="#999"
              onFocus={() => grade1DRef.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={grade1DRef}
              style={styles.input}
              onChangeText={(text) => setGrade1D(parseFloat(text))}
              onSubmitEditing={() => grade2DRef.current.focus()}
            />
            <TextInput
              placeholder="2ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade2DRef}
              style={styles.input}
              onChangeText={(text) => setGrade2D(parseFloat(text))}
              onSubmitEditing={() => grade3DRef.current.focus()}
            />
            <TextInput
              placeholder="3ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade3DRef}
              style={styles.input}
              onChangeText={(text) => setGrade3D(parseFloat(text))}
              onSubmitEditing={() => grade4DRef.current.focus()}
            />

            <View>
              <Text style={styles.txtH2}>Média 1º Sem.</Text>
              <Text style={styles.average}> {round(average1D, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}

          {/* 2º Semestre */}
          <View style={styles.viewSem2}>
            <TextInput
              placeholder="4ª nota"
              placeholderTextColor="#999"
              onFocus={() => grade4DRef.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={grade4DRef}
              style={styles.input}
              onChangeText={(text) => setGrade4D(parseFloat(text))}
              onSubmitEditing={() => grade5DRef.current.focus()}
            />
            <TextInput
              placeholder="5ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade5DRef}
              style={styles.input}
              onChangeText={(text) => setGrade5D(parseFloat(text))}
              onSubmitEditing={() => grade6DRef.current.focus()}
            />
            <TextInput
              placeholder="6ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade6DRef}
              style={styles.input}
              onChangeText={(text) => setGrade6D(parseFloat(text))}
            />

            <View>
              <Text style={styles.txtH2}>Média 2º Sem.</Text>
              <Text style={styles.average}> {round(average2D, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}
          <View style={styles.viewAverage}>
            <View>
              <Text style={styles.txtAverage}>Média Geral</Text>
              <Text style={styles.generalAverage}> {round(averageD, 2)}</Text>
            </View>
            <Text style={styles.txtHR}></Text>
            <View style={styles.view}>
              <TouchableOpacity style={styles.btn} onPress={handleDelete}>
                <Text style={styles.btnText}>Apagar Notas</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.txtH1}>Recuperação</Text>
        </View>
        {/*RECUPERAÇÃO*/}
        <View style={styles.container}>
          {/* 1º Semestre */}
          <View style={styles.viewSem1}>
            <TextInput
              placeholder="1ª nota"
              placeholderTextColor="#999"
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
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade2Ref}
              style={styles.input}
              onChangeText={(text) => setGrade2(parseFloat(text))}
              onSubmitEditing={() => grade3Ref.current.focus()}
            />
            <TextInput
              placeholder="3ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade3Ref}
              style={styles.input}
              onChangeText={(text) => setGrade3(parseFloat(text))}
              onSubmitEditing={() => rec1Ref.current.focus()}
            />

            <View>
              <Text style={styles.txtH2}>Média 1º Sem.</Text>
              <Text style={styles.average}> {round(average1, 2)}</Text>
              <TextInput
                placeholder="Recuperação"
                placeholderTextColor="#999"
                keyboardType="numeric"
                selectTextOnFocus
                ref={rec1Ref}
                style={styles.input}
                onChangeText={(text) => setRec1(parseFloat(text))}
                onSubmitEditing={() => grade4Ref.current.focus()}
              />
              <Text style={styles.txtInfo}>
                Obs.: repetir média semestral se recuperação menor ou igual à
                média semestral, ou se aluno na média
              </Text>
              <Text style={styles.txtH2}>Média 1º Sem. com Recuperação</Text>
              <Text style={styles.average}> {round(averageRec1, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}

          {/* 2º Semestre */}
          <View style={styles.viewSem2}>
            <TextInput
              placeholder="4ª nota"
              placeholderTextColor="#999"
              onFocus={() => grade4Ref.current.focus()}
              selectTextOnFocus
              keyboardType="numeric"
              ref={grade4Ref}
              style={styles.input}
              onChangeText={(text) => setGrade4(parseFloat(text))}
              onSubmitEditing={() => grade5Ref.current.focus()}
            />
            <TextInput
              placeholder="5ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade5Ref}
              style={styles.input}
              onChangeText={(text) => setGrade5(parseFloat(text))}
              onSubmitEditing={() => grade6Ref.current.focus()}
            />
            <TextInput
              placeholder="6ª nota"
              placeholderTextColor="#999"
              keyboardType="numeric"
              selectTextOnFocus
              ref={grade6Ref}
              style={styles.input}
              onChangeText={(text) => setGrade6(parseFloat(text))}
              onSubmitEditing={() => rec2Ref.current.focus()}
            />

            <View>
              <Text style={styles.txtH2}>Média 2º Sem.</Text>
              <Text style={styles.average}> {round(average2, 2)}</Text>
              <TextInput
                placeholder="Recuperação"
                placeholderTextColor="#999"
                keyboardType="numeric"
                selectTextOnFocus
                ref={rec2Ref}
                style={styles.input}
                onChangeText={(text) => setRec2(parseFloat(text))}
              />
              <Text style={styles.txtInfo}>
                Obs.: repetir média semestral se recuperação menor ou igual à
                média semestral, ou se aluno na média
              </Text>
              <Text style={styles.txtH2}>Média 2º Sem. com Recuperação</Text>
              <Text style={styles.average}> {round(averageRec2, 2)}</Text>
            </View>
          </View>
          {/* <Text style={styles.txtHR}></Text> */}
          <View style={styles.viewAverage}>
            <View>
              <Text style={styles.txtAverage}>Média Geral</Text>
              <Text style={styles.generalAverage}> {round(average, 2)}</Text>
            </View>
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

export default Seis;

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
    backgroundColor: "#fefefe",
  },
  viewSem2: {
    width: "50%",
    backgroundColor: "#fffff5",
  },
  viewAverage: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  scrollView: {
    // marginHorizontal: 20,
    // marginBottom: 20,
    // width: "100%",
  },
  txtH1: {
    color: "#ccc",
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
  txtInfo: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
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
    // textShadowOffset: { width: 1.5, height: 3 },
    textShadowRadius: 4,
    textAlign: "center",
  },
  generalAverage: {
    fontSize: 75,
    fontWeight: "bold",
    color: "#000",
    // textShadowColor: "rgba(90, 90, 90, 0.75)",
    // textShadowOffset: { width: 2, height: 1 },
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
    backgroundColor: "#000",
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
