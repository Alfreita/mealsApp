import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMeals from "../screens/CategoryMealsScreens";
import MealsDetail from "../screens/MealsDetailScrees";
import Favorite from "../screens/FavoritesScreens";
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
      screen: CategoryMeals,
    },
    MealDetail: {
      screen: MealsDetail,
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
    screen: Favorite,
  },
});

export default createAppContainer(MealsFavTabNavigator);
