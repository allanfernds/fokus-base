import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil } from "../Icons";

type Props = {
  completed: Boolean;
  text: String;
  onToggleComplete?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
};

export default function TaskItem({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}: Props) {
  const cardStyles = [styles.card];

  if (completed) {
    cardStyles.push(styles.cardCompleted);
  }

  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck completed={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <Text>Remove</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#98a0a8",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },
  cardCompleted: {
    backgroundColor: "#0F725C",
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: "#021123",
    fontWeight: "bold",
  },
});
