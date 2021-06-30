import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealitem = (itemData: any) => {
    return (
      <View style={styles.MealItem}>
        <MealItem
          title={itemData.item.title}
          onSelectMeal={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
              params: {
                mealId: itemData.item.id,
              },
            });
          }}
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
CategoryMealsScreen.navigationOptions = (navigationData: any) => {
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
export default CategoryMealsScreen;
