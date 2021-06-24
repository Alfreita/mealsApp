import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategorieScreen from "../screens/CategoriesScreens";
import CategoryMeals from "../screens/CategoryMealsScreens";
import MealsDetail from "../screens/MealsDetailScrees";

const MealsNavigation = createStackNavigator({
  Categories: {
    screen: CategorieScreen,
  },
  CategoryMeals: {
    screen: CategoryMeals,
  },
  MealDetail: {
    screen: MealsDetail,
  },
});

export default createAppContainer(MealsNavigation);
