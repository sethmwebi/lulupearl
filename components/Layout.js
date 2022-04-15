import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShown, setStoreLinkShown } from "../redux/elementsSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomCarousel from "./BottomCarousel";
import { getCartTotal } from "../redux/cartSlice"

const Layout = ({ children }) => {
	const { items, totalAmount } = useSelector((state) => ({...state.cart}));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartTotal())
	},[items])

	return (
		<div
			onClick={() => {
				dispatch(setShown({ shown: false }));
			}}
		>
			<div>
				<Navbar />
				<div
					onMouseEnter={() => {
						dispatch(setStoreLinkShown({ storeLinkShown: false }));
					}}
				>
					{children}
					<BottomCarousel />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Layout;
