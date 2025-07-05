import { useTaskContext } from "@/components/context/useTaskContext";
import FocusButton from "@/components/FocusButton";
import { PlusIcon } from "@/components/Icons";
import TaskItem from "@/components/TaskItem";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { tasks, removeTask, toggleTaskCompletion } = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                text={item.description}
                completed={item.completed}
                onPressDelete={() => removeTask(item.id)}
                onToggleComplete={() => toggleTaskCompletion(item.id)}
                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                key={item.id}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 8, marginBottom: 16 }} />
            )}
            ListHeaderComponent={
              <Text style={styles.title}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View
                style={{ marginTop: 16, paddingBottom: 40, marginBottom: 40 }}
              >
                <FocusButton
                  title="Adicionar nova tarefa"
                  icon={<PlusIcon />}
                  onPress={() => router.navigate("/add-tasks")}
                  outline
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
    marginBottom: 16,
  },
  inner: {
    gap: 8,
  },
});
