import { useTaskContext } from "@/components/context/useTaskContext";
import { IconSave } from "@/components/Icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EditTask() {
  const [description, setDescription] = useState<string>("");

  const { id } = useLocalSearchParams();
  const { editTaskById } = useTaskContext();
  const route = useRouter();

  const saveEditAndNAvigate = () => {
    editTaskById(Number(id), description);
    route.navigate("/tasks");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Editar tarefa de id: {id}</Text>
          <TextInput
            style={styles.input}
            numberOfLines={18}
            multiline
            onChangeText={setDescription}
            value={description}
          />
          <View style={styles.actions}>
            <Pressable
              style={styles.button}
              onPress={() => saveEditAndNAvigate()}
            >
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
  },
  inner: {
    backgroundColor: "#98a0a8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    height: 150,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
