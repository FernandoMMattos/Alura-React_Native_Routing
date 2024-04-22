import "react-native-gesture-handler";
import Navigation from "./src/routes/navigation";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    PoppinsRegular: Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Navigation />;
}
