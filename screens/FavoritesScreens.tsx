import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = (props: any) => {
  const favoritesMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList listData={favoritesMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOption = {
  headerTitle: "Your Favorites",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoriteScreen;
