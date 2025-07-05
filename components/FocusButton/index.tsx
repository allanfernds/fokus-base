import type { ReactElement } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  onPress?: () => void;
  icon?: ReactElement;
  title: String;
  outline?: boolean;
};

function FocusButton({ onPress, title, icon, outline }: Props) {
  return (
    <Pressable
      style={[styles.startBtn, outline && styles.outileneButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.startBtnText, outline && styles.outlieneButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  outileneButton: {
    backgroundColor: "transparent",
    borderColor: "#b872ff",
    borderWidth: 2,
  },

  startBtnText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  outlieneButtonText: {
    color: "#b872ff",
  },
});

export default FocusButton;
