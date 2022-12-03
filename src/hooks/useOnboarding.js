import { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default function useOnboarding() {
	const [isLoading, setIsLoading] = useState(false); 

	const createUserProfile = async (avatarUrl, username) => {
		setIsLoading(false);
		try{
			await firestore()
				.collection("Users")
				.add({	
					avatarUrl,
					username
				});
		} catch (error) {
			Alert.alert("Error", error.message);
		}finally{
			setIsLoading(false);
		}
	};
	return {
		isLoading,
		createUserProfile
	};
}
