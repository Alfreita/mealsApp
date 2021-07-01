import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import CustomHeaderButtons from "../components/HeaderButtons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ false: "#ccc", true: Colors.accentColor }}
        thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
      />
    </View>
  );
};

const FiltersScreen = (props: any) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>

      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue: boolean) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue: boolean) => setIsVegetarian(newValue)}
      />
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

    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});
export default FiltersScreen;
