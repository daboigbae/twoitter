import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		firebaseUser: {}
	},
	reducers: {
		//TODO: add reducers
		setFirebaseUser: (state, action) => {
			state.firebaseUser = action.payload;
		},
		clearFirebaseUser: (state) => {
			state.firebaseUser = {};
		}
	}
});

export const { setFirebaseUser, clearFirebaseUser } = UserSlice.actions;
export default UserSlice.reducer;
