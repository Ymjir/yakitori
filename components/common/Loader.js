import { View, ActivityIndicator, StyleSheet, StatusBar } from "react-native";

import { colors } from "../../styles";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <ActivityIndicator color={colors.black} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
