import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action: any) => {
  return state;
};

export default mealsReducer;
