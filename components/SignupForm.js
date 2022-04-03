import Image from "next/image"
import { useState, useEffect } from "react";
import { signIn, getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux"
import { switchToSignin, setExpanded } from "../redux/signupSlice"

const SignupForm = () => {
	const { expandingTransition: { duration } } = useSelector((state) => ({ ...state.signup }));
	const dispatch = useDispatch()
	const [providers, setProviders] = useState();
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		const setTheProviders = async () => {
			const setupProviders = await getProviders();
			setProviders(setupProviders);
		};
		setTheProviders();
	}, []);

	if(session){
		router.push("/")
	}

	return (
		<div className="flex flex-col">
			<div className="flex flex-col w-full">
				<h4 className="text-center mt-2">Sign Up</h4>
				<div className="flex flex-col mt-10 space-y-4">
					<button className="flex flex-row items-center justify-center bg-[#4267B2] py-3 text-white rounded-full" onClick={() => signIn(providers.facebook.id)}>
						<Image height={30}
							width={30} src="https://img.icons8.com/color/30/facebook-new.png"/>
						<p className="whitespace-nowrap ml-1">signup with facebook</p>
					</button>
					<button className="flex items-center justify-center bg-white border border-1 border-gray-500 py-3  text-black rounded-full" onClick={() => signIn(providers.google.id)}>
						<Image height={24}
							width={24} src="https://img.icons8.com/fluency/24/google-logo.png"/>
						<p className="ml-1">signup with google</p>
					</button>
					<span className="decoration-none text-xs text-gray-600 font-medium text-center">Already have an account? <span className="text-xs text-red-500 font-medium mr-1 cursor-pointer" onClick={() => {
								dispatch(setExpanded({ expanded: true }));
								setTimeout(() => {
									dispatch(setExpanded({ expanded: false }));
								},duration * 1000 - 1500);
								setTimeout(() => {
									dispatch(switchToSignin())
								},400)
							}}>Log In</span></span>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
