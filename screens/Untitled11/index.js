import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled11 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.LJwOrbIW}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  LJwOrbIW: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40,
    position: "absolute",
    left: 55,
    top: 126
  }
});
export default Untitled11;