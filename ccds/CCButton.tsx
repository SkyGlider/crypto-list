import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SPACINGS } from "./constants";

interface CCButtonProps {
  title: string;
  onPress: VoidFunction;
}

const CCButton = ({ title, onPress }: CCButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: SPACINGS.S_2,
    paddingVertical: SPACINGS.S_1,
    borderRadius: SPACINGS.S_1,
  },
  text: {
    color: COLORS.textPrimary,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CCButton;
