import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import FocusButton from "../components/FocusButton";
import { LogoIcon } from "../components/Icons";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LogoIcon />
      <Text style={styles.title}>
        Otimize sua produtividade,{"\n"}
        <Text style={styles.titleBold}>mergulhe no que importa</Text>
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/images/home-image.png")}
      />
      <FocusButton
        title="Quero iniciar!"
        onPress={() => router.navigate("/pomodoro")}
      />
      <View>
        <Text style={styles.footer}>Desenvolvido Por Alan Fernandes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 37,
  },
  titleBold: {
    fontWeight: "bold",
  },
  screenContent: {
    flex: 1,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#144480",
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  footer: {
    textAlign: "center",
    fontSize: 13,
    width: "85%",
    color: "#98A0A890",
  },
});
