import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShown, setStoreLinkShown } from "../redux/elementsSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomCarousel from "./BottomCarousel";

const Layout = ({ children }) => {
	const dispatch = useDispatch();
	const showElements = useSelector((state) => state.elements.shown);
	return (
		<div
			onClick={() => {
				dispatch(setShown({ shown: false }));
			}}
		>
			<Navbar />
			{children}
			<BottomCarousel />
			<Footer />
		</div>
	);
};

export default Layout;
