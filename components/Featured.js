import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { EyeIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux"
import { filterFeatured } from "../redux/featuredSlice"

const nonActiveBtnStyles = "capitalize bg-red-400 px-5 py-3";
const activeBtnStyles = "capitalize bg-black/80 px-5 py-3";
// whether its new or its a sale
const status = ["new", "sale"];
const item = status[Math.floor(Math.random() * status.length)];

const Featured = () => {
	const { products, allProducts, featuredProducts, bestSelling, activeBtn} = useSelector(state => ({...state.featured}))
	const dispatch = useDispatch()
	const [transitionDown, setTransitionDown] = useState(false);
	const [index, setIndex] = useState(0);
	const [toolTip1, setToolTip1] = useState(false);
	const [toolTip2, setToolTip2] = useState(false);

		return (
		<div className="my-5 flex justify-center flex-col items-center leading-4">
			<h4 className="text-2xl mb-2">Featured Products</h4>
			<p className="text-sm text-gray-400 tracking-widest">
				Shop our best selling products
			</p>
			<div className="flex space-x-4 text-white/90 mt-8">
				<button
					onClick={() => {
						dispatch(filterFeatured({activeBtn: "all"}))
					}}
					className={`${
						activeBtn === "all" ? activeBtnStyles : nonActiveBtnStyles
					}`}
				>
					all
				</button>
				<button
					onClick={() => {
						dispatch(filterFeatured({activeBtn: "featured"}))
					}}
					className={`${
						activeBtn === "featured" ? activeBtnStyles : nonActiveBtnStyles
					}`}
				>
					top featured
				</button>
				<button
					onClick={() => {
						dispatch(filterFeatured({activeBtn: "best-selling"}))
					}}
					className={`${
						activeBtn === "best-selling" ? activeBtnStyles : nonActiveBtnStyles
					}`}
				>
					best seller
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 container mt-8 h-[100%]">
				{products.map(({ id, img, price, desc, status }) => {
					return (
						<motion.div layout className="flex flex-col" key={id}>
							<AnimatePresence>
								<motion.div
									layout
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.6 }}
									className="px-5 py-8 justify-center relative overflow-hidden w-[100%] sm:w-auto"
									onMouseEnter={() => {
										setTransitionDown(true);
										setIndex(id);
									}}
									onMouseLeave={() => {
										setTransitionDown(false);
										setToolTip1(false);
										setToolTip2(false);
									}}
								>
									<div className="flex justify-center">
										<Image
											src={img}
											height="150"
											width="150"
											className="object-contain"
										/>
										<div
											className={`${index === id && "overlay"} ${
												transitionDown && "translate-y-[100%]  h-[100%]"
											}`}
										>
											<div
												className={`${
													transitionDown && index === id
														? "flex flex-col bg-red-400 w-8"
														: "hidden"
												}`}
											>
												<div
													className="relative inline-block"
													onMouseEnter={() => {
														setToolTip1(true);
														setToolTip2(false);
													}}
												>
													<EyeIcon className="h-8 w-8 py-2 px-1.5 text-white hover:bg-black/90" />
													<span
														className={`${
															toolTip1 ? "visible" : "invisible"
														} tooltip text-xs whitespace-nowrap`}
													>
														view
													</span>
												</div>

												<div
													className="relative inline-block"
													onMouseEnter={() => {
														setToolTip2(true);
														setToolTip1(false);
													}}
												>
													<HeartIcon className="h-8 w-8 py-1.5 px-1.5 text-white/90 hover:bg-black/90" />
													<span
														className={`${
															toolTip2 ? "visible" : "invisible"
														} tooltip text-xs whitespace-nowrap`}
													>
														Add to wishlist
													</span>
												</div>
											</div>

											{/*Add to cart*/}
											<div
												className={`${
													transitionDown && index === id
														? "block absolute text-white/70 px-2 py-3 cursor-pointer hover:bg-black/80 bottom-0 right-0 bg-red-400"
														: "hidden"
												}`}
											>
												Add To Cart
											</div>
										</div>
										{/*status*/}
										<div className="absolute top-0 right-0 bg-red-400 text-white/70 w-[50px] text-center py-1 py-3">
											{item}
										</div>
									</div>
								</motion.div>
								<motion.div
									layout
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.6 }}
									className="mt-3 flex justify-center flex-col bg-gray-200 px-2 py-3 h-40"
								>
									<p className="tracking-wide text-sm mb-3 line-clamp-4">
										{desc}
									</p>
									<p className="font-bold">ksh {price}.00</p>
								</motion.div>
							</AnimatePresence>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Featured;
