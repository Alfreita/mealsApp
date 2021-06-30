import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeaderButtons from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FiltersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screens</Text>
    </View>
  );
};
FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FiltersScreen;
