import {
  FlatList,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import moment from "moment";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useMangaDetails } from "../../hooks/useMangaDetails";
import { Loader } from "../../components/common/Loader";
import { styles } from "./styles";
import { colors, WIDTH } from "../../styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export const MangaView = ({ navigation, route }) => {
  const { id } = route.params;

  const [manga, isLoading] = useMangaDetails(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={"transparent"}
      />

      <View style={{ flex: 1 }}>
        <FlatList
          data={manga.chapters}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={true}
          windowSize={10}
          ListHeaderComponent={<MangaDetailsHeader manga={manga} />}
        />
      </View>
    </View>
  );
};

const renderItems = ({ item }) => {
  return (
    <View style={{ marginBottom: 12, paddingHorizontal: 12 }}>
      <Text style={{ fontSize: 14 }} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        {moment(item.date, "MMM DD,YY").format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

const MangaDetailsHeader = ({ manga }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: manga.cover }}
        style={{ flex: 1 }}
        imageStyle={{}}
      >
        <LinearGradient
          colors={["rgba(239,236,236,0.5)", "rgba(255,255,255,0.6)", "#ffffff"]}
          style={{
            flex: 1,
            paddingHorizontal: 12,
            paddingTop: insets.top,
            paddingBottom: 12,
          }}
        >
          <View
            style={{
              paddingTop: 20,
              paddingBottom: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={colors.black} />
            </Pressable>

            <Ionicons name="ellipsis-vertical" size={24} color={colors.black} />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ overflow: "hidden", borderRadius: 3, borderWidth: 0.5 }}
            >
              <Image
                source={{ uri: manga.cover }}
                style={{ width: WIDTH / 3.5, height: WIDTH / 2.5 }}
              />
            </View>
            <View style={{ flexShrink: 1, marginLeft: 12 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {manga.name}
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {manga.author.map((author, index) => (
                  <Text key={index.toString()}>{author.name}, </Text>
                ))}
              </View>

              <Text style={{ color: "gray" }}>{manga.status}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={{ marginHorizontal: 12 }}>
        <Text>{manga.description.trim()}</Text>
      </View>

      <ScrollView
        horizontal
        fadingEdgeLength={20}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingRight: 12,
            paddingLeft: 12,
            marginVertical: 12,
          }}
        >
          {manga.genres.map((genre) => (
            <View
              key={genre.id}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
                backgroundColor: colors.light,
                marginRight: 5,
                borderRadius: 5,
              }}
            >
              <Text>{genre.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 12,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {manga.chapters.length} Chapters
        </Text>

        <Ionicons name="md-filter-sharp" size={20} color={colors.black} />
      </View>
    </View>
  );
};
