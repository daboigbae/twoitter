import React, { useMemo, useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import {
	Button,
	ItemSeparator
} from "@digital-art-dealers/react-native-component-lib";
import useAuth from "../../hooks/useAuth";

const LoginScreen = () => {
	const { signIn, isLoading } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isDataEmpty = useMemo(() => {
		return email === "" || password === "";
	});

	const handleSignIn = async () => {
		await signIn({ email, password });
	};
	return (
		<SafeAreaView>
			<View className="h-screen w-screen justify-start  p-8">
				<Text className="text-3xl font-extrabold text-black">
					To get started, enter your email and password
				</Text>
				<ItemSeparator separatorStyle="h-8" />
				<TextInput
					value={email}
					onChangeText={setEmail}
					placeholder="Email address"
					placeholderTextColor="gray"
					className="w-full h-16 text-xl font-light border-b border-gray-300"
				/>
				<TextInput
					value={password}
					onChangeText={setPassword}
					secureTextEntry={true}
					placeholder="Password"
					placeholderTextColor="gray"
					className="w-full h-16 text-xl font-light border-b border-gray-300"
				/>
				<ItemSeparator separatorStyle="h-4" />
				<View className="flex-row justify-between">
					<Button
						label="Forgot password?"
						customButtonStyle=" h-10  rounded-full justify-center items-center self-end"
						customTextStyle="text-lg"
					/>
					{!isDataEmpty && (
						<Button
							onPress={handleSignIn}
							isLoading={isLoading}
							label="Next"
							customButtonStyle="py-1 h-10 bg-blue-500 w-24 rounded-full justify-center items-center self-end"
							customTextStyle="text-white text-base font-bold"
						/>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
