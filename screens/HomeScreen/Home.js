import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback } from "react";

import MangaCard from "../../components/MangaCard";
import { useManga } from "../../hooks/useManga";
import { styles } from "./styles";

const CARD_MARGIN = 10;

export const Home = () => {
  const [manga, setPageNo, isRefreshing] = useManga();

  const onEndReached = useCallback(() => {
    if (!isRefreshing) {
      setPageNo((prevState) => prevState + 1);
    }
  }, [isRefreshing]);

  const onRefresh = useCallback(() => {
    setPageNo(1);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        data={manga}
        renderItem={renderItems}
        keyExtractor={(item) => item.name}
        removeClippedSubviews={true}
        windowSize={10}
        numColumns={3}
        columnWrapperStyle={{
          marginBottom: CARD_MARGIN,
          marginLeft: CARD_MARGIN,
        }}
        ListHeaderComponent={<Header />}
      />
    </SafeAreaView>
  );
};

const renderItems = ({ item, index }) => (
  <MangaCard
    {...item}
    cardStyles={{
      marginRight: CARD_MARGIN,
      marginTop: index < 3 ? CARD_MARGIN : 0,
    }}
  />
);

const Header = () => (
  <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
    <Text style={{ fontSize: 24, fontWeight: "bold" }}>Explore Manga</Text>
  </View>
);
