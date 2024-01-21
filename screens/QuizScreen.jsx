import { View, StyleSheet } from "react-native";
import { QuizQuestion, Options, Footer, Pagination } from "../components";
import { useState } from "react";
import { storage } from "../App";
import uuid from "react-native-uuid";
import { data } from "../data/data";
export const QuizScreen = ({ route, navigation }) => {
  const { questions, categoryName } = route.params;

  //pagination stuff
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  // pagination - // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = questions.slice(indexOfFirstPost, indexOfLastPost);

  // pagination - // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // pagination - // yada yada
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(questions.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // pagination - //finished --->

  const [selectedOptions, setSelectedOptions] = useState({});

  ///option selection
  const optionSelectHandler = (questionId, selectedAnswer, isOptionCorrect) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: selectedAnswer,
    });
  };

  let score = 0;

  const currentCategory = data.filter(
    (category) => category.name === categoryName
  );

  currentCategory[0].questions.map((question) => {
    question.options.map((option) => {
      return option.optionId === selectedOptions[question.questionId] &&
        option.isOptionCorrect === true
        ? (score = score + 10)
        : null;
    });
  });

  const handleSubmit = () => {
    storage.save({
      key: "score",
      id: uuid.v4(),
      data: {
        categoryName: categoryName,
        score: score,
      },
      expires: null,
    });
    navigation.navigate("ScoreCard", { score, categoryName });
    navigation.reset({
      index: 0,
      routes: [
        { name: "HomeStack", params: { score, categoryName } },
        { name: "ScoreCard", params: { score, categoryName } },
      ],
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        paginate={paginate}
      />

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 32,
        }}
      />

      <View style={styles.questionContainer}>
        {currentPosts.map((question, questionIndex) => (
          <View key={questionIndex}>
            {/* questions  */}
            <QuizQuestion question={question} />

            {/* options  */}
            {question.options.map((option, index) => (
              <Options
                key={option.optionId}
                option={option}
                index={index}
                question={question}
                selectedOptions={selectedOptions}
                optionSelectHandler={optionSelectHandler}
              />
            ))}

            {/* footer  */}
            <Footer handleSubmit={handleSubmit} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  questionContainer: {
    padding: 18,
  },

  options: {
    padding: 16,
  },
});
