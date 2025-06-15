import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  width: number;
  height: number;
  offPressColor: string;
  onPressColor: string;
  buttonPress: () => void;
};

export default function Button({
  label,
  width,
  height,
  offPressColor,
  onPressColor,
  buttonPress,
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  function handlePress() {
    setPressed(true);
    buttonPress();
  }
  return (
    <Pressable
      style={[
        styles.buttonbody,
        {
          width: width,
          height: height,
          backgroundColor: !pressed ? offPressColor : onPressColor,
        },
      ]}
      onPressIn={() => handlePress()}
      onPressOut={() => setPressed(false)}
    >
      <Text style={styles.buttontext}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonbody: {
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonbodypressed: {
    marginRight: 5,
    backgroundColor: "#696969",
    width: 80,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonclear: {
    backgroundColor: "#ff8616",
    width: 150,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttontext: {
    fontSize: 35,
    color: "white",
  },
});
