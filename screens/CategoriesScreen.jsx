import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { data } from "../data/data";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export const CategoriesScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "RobotoMono-ExtraBold": require("../assets/fonts/RobotoSlab-ExtraBold.ttf"),
    "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.main} onLayout={onLayoutRootView}>
      <Text style={styles.heading}>Choose category:</Text>

      <View style={styles.container}>
        {data.map((card, index) => (
          <CategoryCard
            card={card}
            index={index}
            key={index}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

const CategoryCard = ({ card, index, navigation }) => {
  return (
    <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("Category", {
          categoryName: card.name,
          questions: card.questions,
        })
      }
    >
      <View style={styles.cardContainer} key={index}>
        <Image source={card.image} />
        <Text style={styles.cardHeading}>{card.name} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 32,
    marginBottom: 18,
    fontWeight: 600,
    fontFamily: "RobotoMono-ExtraBold",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cardContainer: {
    borderColor: "black",
    marginBottom: 10,
    marginLeft: 10,
  },
  cardHeading: {
    position: "absolute",
    fontFamily: "RobotoMono-ExtraBold",

    bottom: 10,
    right: 8,
    color: "white",
    fontWeight: 500,
    fontSize: 18,
  },
});
