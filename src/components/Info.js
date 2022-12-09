import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Linking,
  LogBox,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

// adMob
// import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const DATA = [
  {
    id: "1",
    title:
      "A média utilizada nesse App pode ser 5.0, 6.0, 7.0 etc... Fica a critério do usuário escolher qual média utilizar.",
  },
  {
    id: "2",
    title:
      "Não se deve usar vírgula (,) mas ponto (.) nas casas decimais. Caso contrário, o App não funcionará corretamente.",
  },
  {
    id: "3",
    title:
      "Ambas as tabs 'Aprovação Direta 🏃' e 'Recuperação 🚣' possuem quatro campos para 04 notas anuais, sendo duas para cada semestre. Já a tab 'Seis', surpreendentemente, possui seis campos para as 06 notas anuais, sendo três para cada semestre.",
  },

  {
    id: "4",
    title:
      "Na tab 'Aprovação Direta 🏃', deve-se colocar as notas, de acordo com a média escolhida, que sejam iguais ou superiores a 5.0, 6.0, 7.0 etc.",
  },
  {
    id: "5",
    title:
      "Na tab 'Recuperação 🚣', deve-se colocar pelo menos alguma nota que seja inferior à média escolhida.",
  },
  {
    id: "6",
    title:
      "Caso uma das Médias Semestrais na página 'Recuperação 🚣' seja igual ou maior a média escolhida, deve-se repetir essa mesma média na nota de sua respectiva 'Recuperação Semestral. Caso contrário, a 'Média Semestral com Recuperação' será incorreta.",
  },
  {
    id: "7",
    title:
      "Caso a nota de qualquer 'Recuperação' seja menor que a sua respectiva 'Média Semestral', deve-se descartar a nota da 'Recuperação' e repetir a 'Média Semestral'.",
  },
  {
    id: "8",
    title:
      "Na tab 'Semestral', basta colocar as médias semestrais, sem necessidade de colocar as notas.",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.txtH2}>{title}</Text>
  </View>
);

const Info = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  // useEffect(() => {
  //   setTestDeviceIDAsync("EMULATOR");
  // }, []);
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.view}>
          {/* <AdMobBanner
            bannerSize="smartBanner"
            adUnitID="ca-app-pub-2008019372085379/2877398443"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          /> */}
          <Text style={styles.txtH1}>Instruções</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.viewContacts}>
          <Text style={styles.txtContacts}>
            Qualquer dúvida ou sugestão, entre em contato pelo{" "}
            <FontAwesome5
              onPress={() => {
                Linking.openURL(
                  "http://api.whatsapp.com/send?phone=+5579988284730&text=Olá, Gostaria de falar sobre o App das Médias Escolares%0D%0A"
                );
              }}
              name="whatsapp"
              size={34}
              color="green"
            />{" "}
            ou então pelo{" "}
            <FontAwesome5
              onPress={() => {
                Linking.openURL("https://telegram.me/jcgsr");
              }}
              name="telegram-plane"
              size={34}
              color="#ddd"
            />
            .
          </Text>
        </View>
        {/* <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/2877398443"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
  txtH1: {
    color: "#000",
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30,
    textShadowColor: "rgba(234, 221, 2020, 0.45)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  txtH2: {
    color: "#000",
    fontSize: 22,
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
  },
  txtHR: {
    height: 1,
    width: "100%",
    backgroundColor: "#ddd",
    margin: 20,
  },

  item: {
    backgroundColor: "#eee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContacts: {
    display: "flex",
    backgroundColor: "#121212",
    padding: 20,
    // margin: 20,
  },
  txtContacts: {
    color: "#ddd",
  },
});
