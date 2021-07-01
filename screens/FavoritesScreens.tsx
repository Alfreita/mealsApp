import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButtons from "../components/HeaderButtons";
import { useSelector } from "react-redux";

const FavoriteScreen = (props: any) => {
  const favoritesMeals = useSelector((state: any) => state.meals.favoriteMeals);

  return <MealList listData={favoritesMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavoriteScreen;
