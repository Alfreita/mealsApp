import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state: any) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal:any) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = (navigationData: any) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory?.title,
  };
};

export default CategoryMealsScreen;
