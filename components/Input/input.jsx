import { View, Text, TextInput } from "react-native";
import { s } from "./input.style";
export function Input({ value, setDisplayValue, unit }) {
  return (
    <>
      <View style={s.inputWrapper}>
        <TextInput
          style={s.input}
          placeholder="Enter your temperature"
          maxLength={3}
          onChangeText={(text) => setDisplayValue(text)}
          defaultValue={value.toString()}
        />
        <Text style={s.unit}>{unit}</Text>
      </View>
    </>
  );
}
