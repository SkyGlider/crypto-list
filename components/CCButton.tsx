import { COLORS, SPACINGS } from "@/constants/constants";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CCButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => (
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
