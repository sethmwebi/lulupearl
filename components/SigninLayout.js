import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { switchToSignin, switchToSignup } from "../redux/signupSlice";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const headerText =
	"text-3xl font-semibold leading-tight text-white/90 m-0 z-10";
const smallText = "text-white/90 font-medium text-xs m-0 mt-[7px] z-10";

const backdropVariants = {
	expanded: {
		width: "233%",
		height: "1050px",
		borderRadius: "20%",
		transform: "rotate(60deg)",
	},
	collapsed: {
		width: "160%",
		height: "550px",
		borderRadius: "50%",
		transform: "rotate(60deg)",
	},
};

const expandingTransition = {
	type: "spring",
	duration: 2.3,
	stiffness: 30,
};

const SigninLayout = () => {
	const { active } = useSelector((state) => ({ ...state.signup }));
	const dispatch = useDispatch();

	return (
		<div className="w-[280px] min-h-[550px] flex flex-col rounded-3xl shadow-xl relative overflow-hidden mx-auto mt-[40px]">
			<div className="w-full h-[250px] flex flex-col justify-end px-[1.8em] pb-[5em]">
				<motion.div className="w-[138%] h-[520px] absolute flex flex-col rounded-full -top-[290px] -left-[70px] transform rotate-60 bg-red-400" />
				{active === "signin" && (
					<div className="w-full flex flex-col">
						<h2 className={headerText}>Welcome</h2>
						<h2 className={headerText}>Back</h2>
						<h5 className={smallText}>Please sign in to continue</h5>
					</div>
				)}
				{active === "signup" && (
					<div className="w-full flex flex-col">
						<h2 className={headerText}>Create</h2>
						<h2 className={headerText}>Account</h2>
						<h5 className={smallText}>Please sign up to continue</h5>
					</div>
				)}
			</div>
			<div className="w-full flex flex-col px-[1.8em]">
				{active === "signin" && <LoginForm />}
				{active === "signup" && <SignupForm />}
			</div>
		</div>
	);
};

export default SigninLayout;
