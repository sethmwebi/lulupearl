import { useEffect, useState } from "react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setTooltip, setHoveredItem } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";

const Product = ({ item }) => {
	const dispatch = useDispatch();
	const { toolTip1, toolTip2, activeIndex } = useSelector((state) => ({ ...state.product }));
	const [index, setIndex] = useState(0);

	return (
		<>
			<motion.div
				layout="true"
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.6 }}
				className="flex justify-center relative cursor-pointer"
				onMouseEnter={() => {
					dispatch(setHoveredItem({activeIndex: item.id}))
				}}
			>
				<div
					className="absolute top-0 left-0 bg-red-400 w-8 pb-0"
					onMouseLeave={() => {
						dispatch(setTooltip({ toolTip1: false, toolTip2: false }));
					}}
				>
					<div
						className="relative"
						onMouseEnter={() => {
							dispatch(setTooltip({ toolTip1: true, toolTip2: false }));
						}}
					>
						<EyeIcon className="h-8 w-8 px-1.5 text-white hover:bg-black/90" />
						<span
							className={`${
								item.id === activeIndex && toolTip1 ? "visible" : "invisible"
							} tooltip text-xs whitespace-nowrap`}
						>
							view
						</span>
					</div>

					<div
						className="relative"
						onMouseEnter={() => {
							dispatch(setTooltip({ toolTip1: false, toolTip2: true }));
						}}
						onMouseLeave={() => {
							dispatch(setTooltip({ toolTip1: false, toolTip2: false }));
						}}
					>
						<HeartIcon className="h-8 w-8 px-1.5 text-white/90 hover:bg-black/90" />
						<span
							className={`${
								item.id === activeIndex && toolTip2 ? "visible" : "invisible"
							} tooltip text-xs whitespace-nowrap`}
						>
							Add to wishlist
						</span>
					</div>
				</div>
				<Image
					src={item.img}
					className="object-contain"
					height="200px"
					width="200px"
				/>
				<div className="block absolute text-white/70 px-2 py-3 cursor-pointer hover:bg-black/80 bottom-0 right-0 bg-red-400" onClick={(e) => {
					e.stopPropagation()
					dispatch(addToCart(item))
				}}>
					Add To Cart
				</div>
			</motion.div>
			<motion.div
				layout="true"
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.6 }}
				className="flex justify-center bg-white"
			>
				<p>{item.title}</p>
			</motion.div>
		</>
	);
};

export default Product;
