import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 120,
        },
        headerTintColor: "#444",
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: "About GameZone",
          headerTitle: ({ nav }) => (
            <Header navigation={navigation} title="About GameZone" />
          ),
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}
