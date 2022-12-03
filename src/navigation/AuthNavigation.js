import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AUTH_SCREENS_ARRAY } from "../utils/screens";

const Stack = createStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator>
			{AUTH_SCREENS_ARRAY.map((screen) => (
				<Stack.Screen
					key={screen.name}
					name={screen.name}
					options={screen.options}
				>
					{screen.component}
				</Stack.Screen>
			))}
		</Stack.Navigator>
	);
};

export default AuthNavigation;
