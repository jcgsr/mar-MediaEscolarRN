// 03.03.2022
// primero app meu Android e iOS
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [grade1, setGrade1] = useState(0);
  const [grade2, setGrade2] = useState(0);
  const [average, setAverage] = useState(0);

  const grade1Ref = useRef(null);
  const grade2Ref = useRef(null);

  const handleAverage = () => {
    setAverage(parseFloat((grade1 + grade2) / 2).toFixed(2));
    grade1Ref.current.focus();
    grade1Ref.current.clear();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtH1}>Calculadora de Média Esolar</Text>
      <TextInput
        placeholder="1ª nota"
        onFocus={() => grade1Ref.current.focus()}
        keyboardType="numeric"
        ref={grade1Ref}
        style={styles.input}
        onChangeText={(text) => setGrade1(parseFloat(text))}
      />
      <TextInput
        placeholder="2ª nota"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setGrade2(parseFloat(text))}
      />
      <Button title="Média" onPress={handleAverage} />
      <View>
        <Text style={styles.average}> {average}</Text>
      </View>
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
  txtH1: {
    color: "white",
    fontSize: 20,
    marginBottom: 30,
  },
  input: {
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    padding: 2,
    fontSize: 20,
    color: "white",
  },
  average: {
    fontSize: 85,
    color: "white",
  },
});
