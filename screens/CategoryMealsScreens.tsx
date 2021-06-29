import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
const CategoryMeals = (props: any) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealitem = (itemData: any) => {
    return (
      <View style={styles.MealItem}>
        <MealItem
          title={itemData.item.title}
          onSelectMeal={() => {}}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageURL}
        />
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealitem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
CategoryMeals.navigationOptions = (navigationData: any) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory?.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  MealItem: {
    margin: 10,
  },
});
export default CategoryMeals;
