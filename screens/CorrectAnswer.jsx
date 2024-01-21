import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { QuizQuestion, Options } from "../components";
import { data } from "../data/data";
export const CorrectAnswer = ({ route }) => {
  const { categoryName } = route.params;

  const filteredCategoryQuestions = data.filter(
    (ele) => ele.name === categoryName
  );
  //   const [questions] = filteredCategoryQuestions;
  console.log("questions", filteredCategoryQuestions[0].questions);
  return (
    <ScrollView style={styles.main}>
      {filteredCategoryQuestions[0]?.questions?.map((question) => (
        <View style={{ marginBottom: 30 }}>
          <View>
            <QuizQuestion question={question} />
            {question.options.map((option, index) => (
              <CorrectOptions option={option} index={index} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export const CorrectOptions = ({ option, index }) => (
  <View
    style={option.isOptionCorrect ? styles.selectedOption : styles.option}
    key={index}
  >
    <Text
      key={index}
      style={
        option.isOptionCorrect ? styles.optionTextSelected : styles.optionText
      }
    >
      Option {index + 1}. {option.option}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
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
