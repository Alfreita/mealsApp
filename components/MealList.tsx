import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props: any) => {
  const renderMealitem = (itemData: any) => {
    return (
      <View style={styles.MealItem}>
        <MealItem
          title={itemData.item.title}
          onSelectMeal={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
              params: {
                mealId: itemData.item.id,
              },
            });
          }}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          imageUrl={itemData.item.imageURL}
        />
      </View>
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealitem}
        style={{ width: "100%" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  MealItem: {
    margin: 10,
  },
});
export default MealList;
