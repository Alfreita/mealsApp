import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMeals = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screens</Text>
      <Button
        title="go to meals details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMeals;
