import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setStoreLinkShown } from "../../redux/elementsSlice";

const activeHover = "hover:text-red-400 cursor-pointer";
const ProductLink = ({ item }) => (
	<Link href="/store">
		<a className={`${activeHover}`}>{item}</a>
	</Link>
);
const StoreLink = () => {
	const dispatch = useDispatch();
	const { storeLinkShown } = useSelector((state) => ({ ...state.elements }));

	const clothing = ["dresses", "skirts", "tops"];
	const shoes = ["flats", "boots", "heels"];
	const accessories = ["bags", "wallets", "handbags"];

	return (
		<div
			className={`${
				storeLinkShown ? "transform transition absolute delay-500" : "hidden"
			} container top-[100%] z-10 bg-white left-[10vw] border border-gray-200 p-5 text-gray-400 font-normal capitalize flex grid grid-cols-3 h-[300px]`}
		>
			<div className="border-r ml-20 space-y-4">
				<h4 className="text-xl uppercase text-black font-semibold">Clothing</h4>
				<div className="space-y-4 flex flex-col">
					{clothing.map((item, idx) => (
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
