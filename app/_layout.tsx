import { TasksProvider } from "@/components/context/TaskProvider";
import { ArrowBack } from "@/components/Icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerStyle: {
              backgroundColor: "#021123",
            },
            headerTintColor: "#FFF",
            drawerStyle: {
              backgroundColor: "#021123",
            },
            drawerLabelStyle: {
              color: "#fff",
            },
            headerShadowVisible: false,
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="add-tasks/index"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return <ArrowBack style={{ marginLeft: 16 }} />;
              },
            }}
          />
          <Drawer.Screen
            name="pomodoro"
            options={{
              drawerLabel: "Timer",
              title: "",
            }}
          />
          <Drawer.Screen
            name="tasks/index"
            options={{
              drawerLabel: "Lista de tarefas",
              title: "",
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerLabel: "Editar Tarefa",
              drawerItemStyle: { display: "none" },
              title: "",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
