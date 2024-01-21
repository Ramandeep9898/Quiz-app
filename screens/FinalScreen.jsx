import { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import scoreImage from "../assets/score.png";
import profile from "../assets/profile.png";
import { storage } from "../App";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export const FinalScreen = ({ route, navigation }) => {
  const { score, categoryName } = route.params;

  const [record, setRecord] = useState([]);

  useFocusEffect(
    useCallback(() => {
      storage
        .getAllDataForKey("score")
        .then((score) => {
          setRecord(score);
        })
        .catch((err) => {
          console.warn(err.message);
          switch (err.name) {
            case "NotFoundError":
              break;
            case "ExpiredError":
              break;
          }
        });
    }, [])
  );

  const filteredRecords = record.filter(
    (ele) => ele.categoryName === categoryName
  );
  console.log("record", filteredRecords);

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image source={scoreImage} style={styles.image} />
        <Text style={styles.score}>{score === 0 ? "00" : score}/70 </Text>

        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => {
            // Handle button press
          }}
        >
          <Text
            style={styles.greenButtonText}
            onPress={() =>
              navigation.navigate("CorrectAnswer", { categoryName })
            }
          >
            Check Answer
          </Text>
        </TouchableOpacity>
        <Text style={styles.scoreText}>
          Your Last Best Score for this category
        </Text>
        <View style={styles.ScoreBoardCardMain}>
          {filteredRecords.slice(-5).map((record, index) => {
            return <ScoreBoardCard key={index} score={record.score} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const ScoreBoardCard = ({ score }) => {
  return (
    <View
      style={[
        scoreBoardCardStyles.scoreBoardCardContainer,
        { flexDirection: "row", alignItems: "center", gap: 48 },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
        <Image
          source={profile}
          style={scoreBoardCardStyles.scoreBoardCardImage}
        />
        <Text style={scoreBoardCardStyles.scoreBoardCardName}>Ramandeep</Text>
      </View>
      <Text style={scoreBoardCardStyles.scoreBoardCardScore}>
        {score === 0 ? "00" : score}/10
      </Text>
    </View>
  );
};

const scoreBoardCardStyles = StyleSheet.create({
  scoreBoardCardContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    borderRadius: 8,
    gap: 60,
  },
  scoreBoardCardImage: {},
  scoreBoardCardName: {
    fontFamily: "RobotoMono-Regular",

    fontSize: 18,
  },
  scoreBoardCardScore: {
    fontFamily: "RobotoMono-Regular",
    // fontWeight: 700,
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 18,
    paddingVertical: 48,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {},
  greenButton: {
    backgroundColor: "#448E53",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 18,
  },
  greenButtonText: {
    color: "#fff",
    fontFamily: "RobotoMono-Regular",
    fontSize: 18,
  },
  score: {
    fontSize: 36,
    fontFamily: "RobotoMono-Regular",
    marginBottom: 12,
  },
  scoreText: {
    textAlign: "center",
    fontFamily: "RobotoMono-ExtraBold",
    fontSize: 36,
    marginBottom: 12,
  },
  ScoreBoardCardMain: {
    gap: 16,
  },
});
