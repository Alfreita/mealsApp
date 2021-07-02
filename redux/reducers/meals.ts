import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal: any) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.filteredMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal: any) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updateFilteredMeals = state.meals.filter((item: any) => {
        if (appliedFilters.glutenFree && !item.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !item.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !item.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !item.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updateFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
