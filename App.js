import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

import MyStack from "./src/MyStack";
import MyDrawer from "./src/MyDrawer";
import MyBottomTabNavigator from "./src/MyBottomTabNavigator";


const App = () =>{
  return(
    <NavigationContainer>
      <PaperProvider>
        <MyStack/>
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App;