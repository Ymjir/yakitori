import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from "axios";

import { Navigation } from "./navigation";
import { BASE_URL } from "./constants/urls";

axios.defaults.baseURL = BASE_URL;

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
