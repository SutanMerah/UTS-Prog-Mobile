import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Selamat Datang</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tentang Pemilik Web:</ThemedText>
        <ThemedText>
          Nama Saya{" "}
          <ThemedText type="defaultSemiBold">M. Hafizhan Azka</ThemedText>
          dengan NIM <ThemedText type="defaultSemiBold">2405102061</ThemedText>
        </ThemedText>
      </ThemedView>

      <Image
        source={{
          uri: "https://i.etsystatic.com/24366194/r/il/57ccaa/5276380159/il_1140xN.5276380159_5gxq.jpg",
        }}
        style={styles.image}
        contentFit="cover"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
});
