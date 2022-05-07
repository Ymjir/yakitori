import { memo, useCallback } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Rating } from "./Rating";
import { colors } from "../styles";

const height = Dimensions.get("window").height;

const MangaCard = ({
  id,
  name,
  image,
  rating,
  latestChapter,
  author,
  cardStyles,
}) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate("MangaView", {
      id: id,
    });
  }, [navigation, id]);

  return (
    <Pressable style={[styles.card, cardStyles]} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.coverImage} />
      <View style={styles.footer}>
        <Rating rating={rating} />
        <Text numberOfLines={1} style={styles.author}>
          {latestChapter}
        </Text>
        <Text numberOfLines={2} style={styles.footerTitle}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.author}>
          {author}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    elevation: 3,
    borderRadius: 2,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  coverImage: {
    width: "100%",
    height: height / 5.3,
    resizeMode: "cover",
  },
  footer: {
    padding: 4,
  },
  footerTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 2,
  },
  author: {
    fontSize: 10,
  },
});

export default memo(MangaCard);
