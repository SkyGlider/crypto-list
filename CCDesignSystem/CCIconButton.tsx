import { COLORS, SPACINGS } from "@/constants/constants";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface CCIconButtonProps {
  title?: string;
  onPress: VoidFunction;
  name: keyof typeof MaterialIcons.glyphMap;
  iconSize?: number;
}

const CCIconButton = ({
  title,
  name,
  iconSize,
  onPress,
}: CCIconButtonProps) => (
  <View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons
        name={name}
        size={iconSize ?? SPACINGS.S_4}
        color={COLORS.textPrimary}
      />
    </TouchableOpacity>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: COLORS.accent,
    padding: SPACINGS.S_2,
    marginBottom: SPACINGS.S_1,
    borderRadius: 99,
  },
  text: {
    color: COLORS.textPrimary,
    textAlign: "center",
  },
});

export default CCIconButton;
