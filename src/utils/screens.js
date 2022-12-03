import React from "react";
import LoginScreen from "../screens/authenticationScreens/LoginScreen";
import MainAuthenticationScreen from "../screens/authenticationScreens/MainAuthenticationScreen";
import SignUpScreen from "../screens/authenticationScreens/SignUpScreen";
import { AUTH_SCREENS } from "./constants";

export const NAVIGATORS = {
	BOTTOM_TAB: "Bottom Tab",
	AUTH: "Authentication",
	LANDING: "Landing Stack"
};

export const BOTTOM_TAB_SCREENS = {
	HOME_SCREEN: "Home"
};

export const AUTH_SCREENS_ARRAY = [
	{
		name: AUTH_SCREENS.MAIN_AUTHENTICATION_SCREEN,
		component: (props) => <MainAuthenticationScreen {...props} />,
		options: {
			headerShown: false
		}
	},
	{
		name: AUTH_SCREENS.LOGIN_SCREEN,
		component: (props) => <LoginScreen {...props} />,
		options: {
			headerShown: false
		}
	},
	{
		name: AUTH_SCREENS.SIGN_UP_SCREEN,
		component: (props) => <SignUpScreen {...props} />,
		options: {
			headerShown: false
		}
	}
];
