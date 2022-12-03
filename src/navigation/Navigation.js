import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATORS } from "../utils/screens";

import LandingScreen from "../screens/LandingScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import AuthNavigation from "./AuthNavigation";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATORS.LANDING}
				component={LandingScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATORS.AUTH}
				component={AuthNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={NAVIGATORS.BOTTOM_TAB}
				component={BottomTabNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;
