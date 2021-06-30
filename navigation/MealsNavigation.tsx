import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMealsScreen from "../screens/CategoryMealsScreens";
import MealsDetailScreen from "../screens/MealsDetailScrees";
import FavoriteScreen from "../screens/FavoritesScreens";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

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
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigation,
  },
  Favorites: {
    screen: FavoriteScreen,
  },
});

export default createAppContainer(MealsFavTabNavigator);
