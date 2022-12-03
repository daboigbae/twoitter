import React, { useMemo, useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";

import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";

import useAuth from "../../hooks/useAuth";

const SignUpScreen = () => {
	const { signUp, isLoading } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isDataEmpty = useMemo(() => {
		return password === "" || email === "";
	});

	// TODO: Register user with firebase
	const handleSignUp = async () => {
		await signUp({ email, password });
	};

	return (
		<SafeAreaView>
			<View className="h-screen w-screen justify-start  p-8">
				<Text className="text-3xl font-extrabold text-black">
					Create your account
				</Text>
				<ItemSeparator separatorStyle="h-8" />
				<TextInput
					value={email}
					onChangeText={setEmail}
					placeholder="Email Address"
					placeholderTextColor="gray"
					className="w-full h-16 text-xl font-light border-b border-gray-300"
				/>
				<TextInput
					value={password}
					onChangeText={setPassword}
					placeholder="Password"
					secureTextEntry={true}
					placeholderTextColor="gray"
					className="w-full h-16 text-xl font-light border-b border-gray-300"
				/>
				<ItemSeparator separatorStyle="h-4" />
				{!isDataEmpty && (
					<Button
						onPress={handleSignUp}
						isLoading={isLoading}
						label="Next"
						customButtonStyle="py-1 h-10  bg-blue-500 w-24 rounded-full justify-center items-center self-end"
						customTextStyle="text-white text-base font-bold"
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;
