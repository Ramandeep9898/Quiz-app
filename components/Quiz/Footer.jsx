import React from "react";
import { View, Button } from "react-native";
import { StyleSheet } from "react-native";

export const Footer = ({ handleSubmit }) => {
  return (
    <View>
      {/* <View style={styles.buttonsContainer}>
        <Button
          // onPress={() => paginate(index + 1)}
          title="Pervious"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          // onPress={() => paginate(index + 1)}
          title="Next"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View> */}

      <Button
        styles={styles.mt40}
        onPress={() => handleSubmit()}
        title="Submit"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
  },
  mt40: {
    marginTop: 40,
  },
});
