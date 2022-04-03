// this slice handles both sign in and sign up
import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
	name: "signup",
	initialState: {
		expanded: false,
		active: "signin",
		expandingTransition: {
			type: "spring",
			duration: 2.3,
			stiffness: 30,
		},
	},
	reducers: {
		switchToSignup: (state) => {
			state.active = "signup";
		},
		switchToSignin: (state) => {
			state.active = "signin";
		},
		setExpanded: (state, action) => {
			state.expanded = action.payload.expanded;
		},
	},
});

export const { switchToSignin, switchToSignup, setExpanded } =
	signupSlice.actions;
export default signupSlice.reducer;
