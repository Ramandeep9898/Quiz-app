import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const QuizQuestion = ({ question }) => {
  return <Text style={styles.questionHeading}>{question.question}</Text>;
};

const styles = StyleSheet.create({
  questionHeading: {
    fontFamily: "RobotoMono-ExtraBold",
    fontSize: 32,
    marginBottom: 28,
  },
});
