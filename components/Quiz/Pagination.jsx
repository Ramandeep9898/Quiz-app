import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
export const Pagination = ({ pageNumbers, currentPage, paginate }) => {
  return (
    <View style={styles.paginationContainer}>
      {pageNumbers.map((number, index) => (
        <TouchableOpacity
          style={
            currentPage === index + 1 && {
              backgroundColor: "#EB6C46",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 50,
            }
          }
          key={index}
          onPress={() => {
            paginate(number);
          }}
        >
          <Text
            style={
              currentPage === index + 1 ? { color: "#fff" } : { padding: 10 }
            }
          >
            {number}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "RobotoMono-Regular",
    fontWeight: 500,
  },
});
