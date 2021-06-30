import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMealsScreen from "../screens/CategoryMealsScreens";
import MealsDetailScreen from "../screens/MealsDetailScrees";
import FavoriteScreen from "../screens/FavoritesScreens";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FiltersScreen from "../screens/FiltersScrees";

const stackScreenConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.accentColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};
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
  { defaultNavigationOptions: stackScreenConfig }
);
const FavoritesNavigation = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteScreen,
    },
    MealsDetail: {
      screen: MealsDetailScreen,
    },
  },
  { defaultNavigationOptions: stackScreenConfig }
);
const FiltersNavigation = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
    },
  },
  { defaultNavigationOptions: stackScreenConfig }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor,
    },
  },
  Favorites: {
    screen: FavoritesNavigation,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
};
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigation,
  },
  {
    contentOptions: {
      activeTintColor: "#e91e63",
      itemsContainerStyle: {
        marginVertical: 100,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);
export default createAppContainer(MainNavigator);
