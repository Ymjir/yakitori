import { View } from "react-native";

import { useMangaDetails } from "../../hooks/useMangaDetails";

export const MangaView = ({ navigation, route }) => {
  const { id } = route.params;

  const [manga, isLoading] = useMangaDetails(id);

  return <View></View>;
};
