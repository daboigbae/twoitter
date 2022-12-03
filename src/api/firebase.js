import auth from "@react-native-firebase/auth";

export const handleSignUp = ({ email, password }) =>
	auth().createUserWithEmailAndPassword(email, password);

export const handleSignIn = ({ email, password }) =>
	auth().signInWithEmailAndPassword(email, password);

export const handleSignOut = () => auth().signOut();
