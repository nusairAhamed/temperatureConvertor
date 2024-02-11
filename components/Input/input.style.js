import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  inputWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
    marginVertical: 20,
    width: "100%",
  },
  unit: {
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    top: 25,
    right: 20,
  },
});
