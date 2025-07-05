import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
type TaskData = {
  id: number;
  description: string;
  completed: boolean;
};

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextType {
  tasks: TaskData[];
  addTask: (description: string) => void;
  removeTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  editTaskById: (id: number, description: string) => void;
}

const defaultContextValue: TaskContextType = {
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggleTaskCompletion: () => {},
  editTaskById: () => {},
};

export const TaskContext = createContext<TaskContextType>(defaultContextValue);

export function TasksProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("focus-tasks");
        const loadedTasks = jsonValue != null ? JSON.parse(jsonValue) : [];
        console.log("armazenando dados:", loadedTasks);
        setTasks(loadedTasks);
        setIsLoaded(true);
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async (value: TaskData[]) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("focus-tasks", jsonValue);
      } catch (e) {
        // saving error
      }
    };
    if (isLoaded) {
      storeData(tasks);
    }
  }, [tasks]);

  const addTask = (description: string) => {
    console.log("Tarefa adicionada");
    setTasks((prevState: TaskData[]) => {
      return [
        ...prevState,
        {
          description,
          id: prevState.length + 1,
          completed: false,
        },
      ];
    });
  };

  const toggleTaskCompletion = (id: number) => {
    console.log(tasks, id);
    setTasks((prevState: TaskData[]) => {
      return prevState.map((t: TaskData) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      });
    });
  };

  const removeTask = (id: number) => {
    setTasks((prevState: TaskData[]) => {
      return prevState.filter((t: TaskData) => t.id != id);
    });
  };

  const editTaskById = (id: number, descripton: string) => {
    setTasks((prevState) =>
      prevState.map((t) => {
        if (t.id === id) {
          t.description = descripton;
        }
        return t;
      })
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, toggleTaskCompletion, addTask, removeTask, editTaskById }}
    >
      {children}
    </TaskContext.Provider>
  );
}
