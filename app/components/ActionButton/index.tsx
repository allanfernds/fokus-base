import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  active: Boolean;
  onPress: () => void;
  display: String;
};

export const ActionButton = ({ active, onPress, display }: Props) => {
  return (
    <Pressable
      style={active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});
