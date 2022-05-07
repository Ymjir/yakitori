import { View, StatusBar, FlatList } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableViewWithGestures";

import { styles } from "./styles";
import { useChapterDetails } from "../../hooks/useChapterDetails";
import { Loader } from "../../components/common/Loader";
import ChapterImage from "../../components/ChapterImage";

export const ViewChapter = ({ route }) => {
  const { mangaId, chapterId } = route.params;

  const [chapter, isLoading] = useChapterDetails(mangaId, chapterId);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar hidden />
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        doubleTapDelay={200}
        movementSensibility={1.2}
        style={styles.zoomView}
      >
        <FlatList
          data={chapter}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
          removeClippedSubviews={true}
          windowSize={10}
        />
      </ReactNativeZoomableView>
    </View>
  );
};

const renderItem = ({ item }) => <ChapterImage {...item} />;
