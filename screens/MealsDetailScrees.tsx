import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsDetail = (props: any) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal: any) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
    </View>
  );
};
MealsDetail.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal: any) => meal.id === mealId);
  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => <Text>FAV!</Text>,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsDetail;
