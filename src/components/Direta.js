import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Direta() {
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

  const handleDelete = () => {
    grade1Ref.current.clear();
    grade1Ref.current.focus();
    grade2Ref.current.clear();
    grade3Ref.current.clear();
    grade4Ref.current.clear();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 1º Semestre */}
        <TextInput
          placeholder="1ª nota"
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
          keyboardType="numeric"
          selectTextOnFocus
          ref={grade2Ref}
          style={styles.input}
          onChangeText={(text) => setGrade2(parseFloat(text))}
          onSubmitEditing={() => grade3Ref.current.focus()}
        />

        <View>
          <Text style={styles.txtH2}>Média 1º Semestre</Text>
          <Text style={styles.average}> {average1}</Text>
        </View>
        <Text style={styles.txtHR}></Text>

        {/* 2º Semestre */}
        <TextInput
          placeholder="3ª nota"
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
          keyboardType="numeric"
          selectTextOnFocus
          ref={grade4Ref}
          style={styles.input}
          onChangeText={(text) => setGrade4(parseFloat(text))}
        />

        <View>
          <Text style={styles.txtH2}>Média 2º Semestre</Text>
          <Text style={styles.average}> {average2}</Text>
        </View>
        <Text style={styles.txtHR}></Text>
        <View>
          <Text style={styles.txtAverage}>Média Geral</Text>
          <Text style={styles.generalAverage}> {average.toFixed(1)}</Text>
        </View>
        <Text style={styles.txtHR}></Text>
        <View style={styles.view}>
          <TouchableOpacity style={styles.btn} onPress={handleDelete}>
            <Text style={styles.btnText}>Apagar Notas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  txtH1: {
    color: "white",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
  },
  txtH2: {
    color: "white",
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  input: {
    margin: 30,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 2,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  average: {
    fontSize: 85,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  generalAverage: {
    fontSize: 85,
    color: "#50D422",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  txtAverage: {
    fontSize: 20,
    color: "#50D422",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  txtHR: {
    height: 1,
    width: "100%",
    backgroundColor: "#50D422",
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
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
