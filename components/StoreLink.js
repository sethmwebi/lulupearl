import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setStoreLinkShown } from "../redux/elementsSlice";

const activeHover = "hover:text-red-400 cursor-pointer";
const ProductLink = ({ item }) => (
	<Link href="/store">
		<a className={`${activeHover}`}>{item}</a>
	</Link>
);
const StoreLink = () => {
	const dispatch = useDispatch();
	const { storeLinkShown } = useSelector((state) => ({ ...state.elements }));
	const { clothing, shoes, accessories } = useSelector((state) => ({
		...state.storelink,
	}));
	const router = useRouter();

	return (
		<div className={`grid grid-cols-3 ${storeLinkShown ? "fixed" : "hidden"} container bg-white left-[10vw] z-50 pb-10 border`}
		>
			<div className="border-r ml-20 space-y-4">
				<h4 className="text-xl uppercase text-black font-semibold">Clothing</h4>
				<div className="space-y-4 flex flex-col">
					{clothing.map((item, idx) => (
						<ProductLink
							key={idx}
							item={item}
							onClick={() => {
								dispatch(setStoreLinkShown({ storeLinkShown: false }));
								router.push("/store");
							}}
						/>
					))}
				</div>
			</div>
			<div className="ml-20 border-r space-y-4">
				<h4 className="text-xl uppercase text-black font-semibold">Shoes</h4>
				<div className="space-y-4 flex flex-col">
					{shoes.map((item, idx) => (
						<ProductLink
							key={idx}
							item={item}
							onClick={() =>
								dispatch(setStoreLinkShown({ storeLinkShown: false }))
							}
						/>
					))}
				</div>
			</div>
			<div className="ml-20 space-y-4">
				<h4 className="text-xl uppercase text-black font-semibold">
					Accessories
				</h4>
				<div className="space-y-4 flex flex-col">
					{accessories.map((item, idx) => (
						<ProductLink
							key={idx}
							item={item}
							onClick={() =>
								dispatch(setStoreLinkShown({ storeLinkShown: false }))
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoreLink;
