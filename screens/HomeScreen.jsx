import { Button, StyleSheet, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Welcome To Quiz app!</Text>
    <Button
      onPress={() => navigation.navigate("Categories")}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
);
