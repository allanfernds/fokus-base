import { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton } from "./components/ActionButton";
import FocusButton from "./components/FocusButton";
import { IconPause, IconPlay } from "./components/Icons/index";
import { Timer } from "./components/Timer";

type Pomodoro = {
  id: string;
  initialValue: number;
  title: string;
  display: string;
};

const pomodoro: Pomodoro[] = [
  {
    id: "focus",
    initialValue: 25 * 60,
    title: "Padrão",
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    title: "Curto",
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    title: "Longo",
    display: "Pausa longa",
  },
];

export default function Index() {
  const timerRef = useRef<number | null>(null);

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType: Pomodoro) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const counterDecrement = () => {
    setSeconds((prevState) => {
      if (prevState === 0) {
        clear();
        return timerType.initialValue;
      }
      return prevState - 1;
    });
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      counterDecrement();
    }, 1000);

    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timerType.title}</Text>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FocusButton
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
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
  text: {
    color: "#FFF",
    fontSize: 30,
    textAlign: "center",
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "85%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timer: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 54,
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    fontSize: 13,
    width: "85%",
    color: "#98A0A890",
  },
});
