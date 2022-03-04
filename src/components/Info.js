import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque iste totam alias vel nam expedita dolorum error. Excepturi, soluta ipsam accusantium dolorum eum officia eveniet nisi molestiae corrupti dignissimos.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque iste totam alias vel nam expedita dolorum error. Excepturi, soluta ipsam accusantium dolorum eum officia eveniet nisi molestiae corrupti dignissimos.",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque iste totam alias vel nam expedita dolorum error. Excepturi, soluta ipsam accusantium dolorum eum officia eveniet nisi molestiae corrupti dignissimos.",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.txtH2}>{title}</Text>
  </View>
);

const Info = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.txtH1}>Instruções</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
    color: "#6477D8",
    fontSize: 22,
    marginBottom: 15,
    marginTop: 15,
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
  item: {
    backgroundColor: "#071458",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
