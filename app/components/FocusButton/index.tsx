import type { ReactElement } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  onPress: () => void;
  icon: ReactElement;
  title: String;
};

function FocusButton({ onPress, title, icon }: Props) {
  return (
    <Pressable style={styles.startBtn} onPress={onPress}>
      {icon}
      <Text style={styles.startBtnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: "#8872ff",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  startBtnText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
});

export default FocusButton;
