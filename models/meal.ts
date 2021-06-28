class Meal {
  id: any;
  categoryIds: any;
  title: any;
  affordability: any;
  complexity: any;
  imageURL: any;
  duration: any;
  ingredients: any;
  steps: any;
  isGlutenFree: any;
  isVegan: any;
  isVegetarian: any;
  isLactoseFree: any;
  constructor(
    id: string,
    categoryIds: Array<string>,
    title: string,
    affordability: string,
    complexity: string,
    imageURL: string,
    duration: number,
    ingredients: Array<string>,
    steps: Array<string>,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageURL = imageURL;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
export default Meal;
