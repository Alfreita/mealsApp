import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMeals from "../screens/CategoryMealsScreens";
import MealsDetail from "../screens/MealsDetailScrees";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const MealsNavigation = createStackNavigator({
  Categories: {
    screen: CategorieScreen,
    navigationOptions: {
      headerTitle: "Meal Categories",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
  CategoryMeals: {
    screen: CategoryMeals,
    navigationOptions: {
      headerTitle: "Meal Categories",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
  MealDetail: {
    screen: MealsDetail,
    navigationOptions: {
      headerTitle: "Meal Categories",
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
});

export default createAppContainer(MealsNavigation);
