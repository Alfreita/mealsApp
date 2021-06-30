import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMealsScreen from "../screens/CategoryMealsScreens";
import MealsDetailScreen from "../screens/MealsDetailScrees";
import FavoriteScreen from "../screens/FavoritesScreens";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigation = createStackNavigator(
  {
    Categories: {
      screen: CategorieScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealsDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);
const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigation,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
