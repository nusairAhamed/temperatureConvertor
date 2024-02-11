import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Input } from "./components/Input/input";

import hotBackground from "./assets/hot.jpeg";
import coldBackground from "./assets/cold.jpeg";
import { useEffect, useState } from "react";

import { UNIT, convertTemperature, inverseUnit, isCold } from "./convertor";

export default function App() {
  let [temperature, setTemperature] = useState(0);
  let [currentUnit, setCurrentUnit] = useState(UNIT.celcius);
  let [background, setBackground] = useState(hotBackground);

  useEffect(() => {
    if (isCold(temperature, currentUnit)) {
      setBackground(coldBackground);
    } else {
      setBackground(hotBackground);
    }
  }, [temperature]);

  function setDisplayValue(value) {
    setTemperature(value);
  }

  function changeUnit() {
    if (currentUnit == UNIT.celcius) {
      setCurrentUnit(inverseUnit(UNIT.celcius));
    } else if (currentUnit == UNIT.farhenite) {
      setCurrentUnit(inverseUnit(UNIT.farhenite));
    }
  }

  return (
    <ImageBackground source={background} style={{ height: "100%" }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.display}>
          {convertTemperature(temperature, currentUnit)}{" "}
          {inverseUnit(currentUnit)}
        </Text>
        <Input
          value={temperature}
          setDisplayValue={setDisplayValue}
          unit={currentUnit}
        />
        <TouchableOpacity onPress={changeUnit}>
          <Text>change to {inverseUnit(currentUnit)}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  display: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
