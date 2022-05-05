import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      <Ionicons
        name={rating >= 1 ? "star" : "star-outline"}
        size={12}
        color="orange"
      />
      <Ionicons
        name={rating >= 2 ? "star" : "star-outline"}
        size={12}
        color="orange"
      />
      <Ionicons
        name={rating >= 3 ? "star" : "star-outline"}
        size={12}
        color="orange"
      />
      <Ionicons
        name={rating >= 4 ? "star" : "star-outline"}
        size={12}
        color="orange"
      />
      <Ionicons
        name={rating >= 5 ? "star" : "star-outline"}
        size={12}
        color="orange"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
