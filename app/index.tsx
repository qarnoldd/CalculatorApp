import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
export default function Index() {
  const [input, setInput] = useState("");
  const [formula, setFormula] = useState("");
  const [output, setOutput] = useState("");
  function buttonPress({ val }: { val: string }) {
    if (input.length < 10) setInput(input + val);
  }
  function addition({ symbol }: { symbol: string }) {
    if (input !== "") {
      const string = input + " " + symbol + " ";
      setInput("");
      setOutput(output + string);
    }
  }

  function equals() {
    const replaced = output + input;
    let equation;
    try {
      equation = eval(replaced.replace(/×/g, "*").replace(/÷/g, "/"));
      setFormula(equation);
    } catch (e) {
      console.log(e);
      setFormula("ERROR");
      setInput("");
      setOutput("");
    }
  }

  return (
    <View style={styles.container}>
      {formula === "ERROR" ? (
        <View style={styles.input}>
          <Text style={styles.error}>ERROR</Text>
        </View>
      ) : (
        <View style={styles.input}>
          <View style={styles.formula}>
            <Text style={styles.operation}>{output}</Text>
            <Text style={styles.inputanswer}>{formula}</Text>
          </View>
          <Text style={styles.inputtext}>{input}</Text>
        </View>
      )}

      <View style={styles.mainbody}>
        <View style={styles.numpad}>
          <View style={styles.row}>
            <Button
              label="1"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "1" })}
            ></Button>
            <Button
              label="2"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "2" })}
            ></Button>
            <Button
              label="3"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "3" })}
            ></Button>
            <Button
              label="+"
              width={80}
              height={90}
              offPressColor="#ff8616"
              onPressColor="#cf6d12"
              buttonPress={() => addition({ symbol: "+" })}
            ></Button>
          </View>

          <View style={styles.row}>
            <Button
              label="4"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "4" })}
            ></Button>
            <Button
              label="5"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "5" })}
            ></Button>
            <Button
              label="6"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "6" })}
            ></Button>
            <Button
              label="-"
              width={80}
              height={90}
              offPressColor="#ff8616"
              onPressColor="#cf6d12"
              buttonPress={() => addition({ symbol: "-" })}
            ></Button>
          </View>
          <View style={styles.row}>
            <Button
              label="7"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "7" })}
            ></Button>
            <Button
              label="8"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "8" })}
            ></Button>
            <Button
              label="9"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "9" })}
            ></Button>
            <Button
              label="×"
              width={80}
              height={90}
              offPressColor="#ff8616"
              onPressColor="#cf6d12"
              buttonPress={() => addition({ symbol: "×" })}
            ></Button>
          </View>
          <View style={styles.row}>
            <Button
              label="0"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "0" })}
            ></Button>
            <Button
              label="("
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: "(" })}
            ></Button>
            <Button
              label=")"
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => buttonPress({ val: ")" })}
            ></Button>
            <Button
              label="÷"
              width={80}
              height={90}
              offPressColor="#ff8616"
              onPressColor="#cf6d12"
              buttonPress={() => addition({ symbol: "÷" })}
            ></Button>
          </View>
          <View style={styles.row}>
            <Button
              label="CLEAR"
              width={165}
              height={90}
              offPressColor="#ff8616"
              onPressColor="#cf6d12"
              buttonPress={() => [setOutput(""), setInput(""), setFormula("")]}
            ></Button>
            <Button
              label="="
              width={80}
              height={90}
              offPressColor="grey"
              onPressColor="#696969"
              buttonPress={() => [
                addition({ symbol: "=" }),
                equals(),
                setInput(""),
              ]}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#222222",
  },
  operation: {
    color: "grey",
    fontSize: 40,
  },

  formula: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  input: {
    //backgroundColor: "yellow",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    paddingLeft: 10,
    borderBottomColor: "white",
    borderBottomWidth: 3,
    marginBottom: 20,
    marginTop: 60,
  },
  error: {
    color: "red",
    fontSize: 40,
  },
  inputtext: {
    color: "white",
    fontSize: 40,
  },
  inputanswer: {
    color: "#ff8616",
    fontSize: 40,
  },
  mainbody: {
    //backgroundColor: "green",
    width: "100%",
    height: "90%",
  },
  numpad: {
    //backgroundColor: "blue",
    width: "100%",
    height: " 90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 2,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});
