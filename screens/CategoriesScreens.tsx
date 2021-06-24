import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Categories = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screens</Text>
      <Button
        title="go to meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
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
export default Categories;
