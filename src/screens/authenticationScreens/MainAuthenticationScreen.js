import React from "react";
import { View, Text } from "react-native";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATORS } from "../../utils/screens";
import { AUTH_SCREENS } from "../../utils/constants";

const MainAuthenticationScreen = () => {
	const navigation = useNavigation();

	const handleLoginNavigation = () => {
		navigation.navigate(NAVIGATORS.AUTH, {
			screen: AUTH_SCREENS.LOGIN_SCREEN
		});
	};

	const handleSignUpNavigation = () => {
		navigation.navigate(NAVIGATORS.AUTH, {
			screen: AUTH_SCREENS.SIGN_UP_SCREEN
		});
	};

	return (
		<View className="h-screen w-screen justify-center  px-8">
			<Text className="text-4xl font-extrabold text-black">
				{"See what's happening in the world right now"}
			</Text>
			<ItemSeparator separatorStyle="h-32" />
			<Button
				label="Create Account"
				onPress={handleSignUpNavigation}
				customButtonStyle="rounded-full bg-blue-500 py-2"
				customTextStyle="text-white text-lg font-bold"
			/>
			<View className="w-full flex-row py-4 justify-center items-center">
				<ItemSeparator separatorStyle="w-1/3 h-[.5px] bg-gray-800 mx-2" />
				<Text className="text-center text-gray-800">Or</Text>
				<ItemSeparator separatorStyle="w-1/3 h-[.5px] bg-gray-800 mx-2" />
			</View>
			<Button
				label="Log In"
				onPress={handleLoginNavigation}
				customButtonStyle="rounded-full bg-blue-500 py-2"
				customTextStyle="text-white text-lg font-bold"
			/>
			<ItemSeparator separatorStyle="h-4" />
			<Text className="text-sm text-gray-500">
				By signing up, you agree to our terms of Service and Privacy Policy,
				including Cookie use
			</Text>
		</View>
	);
};

export default MainAuthenticationScreen;
