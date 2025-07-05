import { StyleSheet, Text } from "react-native";

type Props = {
  totalSeconds: number;
};

export const Timer = ({ totalSeconds }: Props) => {
  const date = new Date(totalSeconds * 1000);
  const options = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 54,
    fontWeight: "bold",
  },
});
