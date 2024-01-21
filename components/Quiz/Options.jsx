import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export const Options = ({
  option,
  index,
  question,
  optionSelectHandler,
  selectedOptions,
}) => (
  <TouchableOpacity
    style={
      option.optionId === selectedOptions[question.questionId]
        ? styles.selectedOption
        : styles.option
    }
    key={index}
    onPress={() =>
      optionSelectHandler(
        question.questionId,
        option.optionId,
        option.isOptionCorrect
      )
    }
  >
    <Text
      key={index}
      style={
        option.optionId === selectedOptions[question.questionId]
          ? styles.optionTextSelected
          : styles.optionText
      }
    >
      Option {index + 1}. {option.option}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  options: {
    padding: 16,
  },
  option: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
  },
  selectedOption: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#448E53",
  },
  optionText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 18,
  },
  optionTextSelected: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 18,
    color: "#fff",
  },
});
