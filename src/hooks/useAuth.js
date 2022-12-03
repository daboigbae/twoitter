import { useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clearFirebaseUser, setFirebaseUser } from "../redux/UserSlice";
import { Alert } from "react-native";
import { handleSignIn, handleSignOut, handleSignUp } from "../api/firebase";
import { NAVIGATORS } from "../utils/screens";

function useAuth() {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const signUp = async ({ email, password }) => {
		setIsLoading(true);

		try {
			const user = await handleSignUp({ email, password });
			if (user) {
				dispatch(setFirebaseUser(user));
				navigation.dispatch(StackActions.replace(NAVIGATORS.LANDING));
			}
		} catch (err) {
			Alert.alert(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	const signIn = async ({ email, password }) => {
		setIsLoading(true);

		try {
			const user = await handleSignIn({ email, password });
			if (user) {
				dispatch(setFirebaseUser(user));
				navigation.dispatch(StackActions.replace(NAVIGATORS.LANDING));
			}
		} catch (err) {
			Alert.alert(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async () => {
		setIsLoading(true);
		await handleSignOut();
		dispatch(clearFirebaseUser());
		navigation.dispatch(StackActions.replace(NAVIGATORS.LANDING));
	};

	return { isLoading, signUp, signIn, signOut };
}

export default useAuth;
