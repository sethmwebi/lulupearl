import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { SearchIcon, CheckIcon, MinusSmIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import RangeSlider from "./RangeSlider";
import Product from "./Product";
import { setShown } from "../redux/elementsSlice";
import { sortProducts } from "../redux/productSlice";

const categoryStyles =
	"ml-2 border-l items-center flex cursor-pointer text-sm font-light tracking-wide pb-2";
const borderStyles = "w-[5%] flex border-t mr-2";

// sorting options
const options = [
	{
		option: `<span>Highest &#8594; Lowest</span>`,
		value: "highest-lowest",
	},
	{
		option: `<span>Lowest &#8594; Highest</span>`,
		value: "lowest-highest",
	},
	{
		option: "Best Selling",
		value: "best-selling",
	},
];

const ProductList = () => {
	// sort state
	const dispatch = useDispatch();
	const { products, sortType } = useSelector((state) => ({ ...state.product }));
	const { shown, showSearchBar } = useSelector((state) => ({
		...state.elements,
	}));
	const [alternateTooltip, setAlternateTooltip] = useState(false);
	const router = useRouter()

	// display type of sort
	const sorted = (sortType) => {
		switch(sortType){
			case "highest-lowest":
				return options[0].option;
			case "lowest-highest":
				return options[1].option;
			case "best-selling":
				return options[2].option;
			default:
				return "Nothing"
		}
	}

	return (
		<div
			className="flex flex-col sm:flex-row mt-4 my-8 container gap-x-2"
			onClick={() => {
				dispatch(setShown(false));
			}}
		>
			<div className="w-[75%] mx-auto sm:w-1/5">
				{/*Hide this search bar when the navbar search bar is displayed*/}
				<div
					className={`${
						showSearchBar ? "hidden" : "bg-black/90 flex items-center"
					}`}
				>
					<input className="outline-none w-full bg-gray-200 pl-4 pr-1 py-3" />
					<SearchIcon className="h-8 w-10 mx-2 text-white/100 cursor-pointer" />
				</div>
				<div>
					<h4 className={`${showSearchBar} ? "mt-0" : "mt-4" text-lg`}>
						Categories
					</h4>
					<span className="w-full border-t-4 flex border-black/90 mt-1" />
					<div className="ml-2">
						<div className="flex bg-gray-200 hover:bg-white cursor-pointer font-light p-2 items-center mt-4">
							<span className="hover:text-red-600">clothing</span>
							<span className="ml-1 text-xs font-thin">&#40;100&#41;</span>
						</div>
						<div className={`${categoryStyles}`}>
							<span className={`${borderStyles}`} />
							<span className="hover:text-red-600">dresses</span>
							<span className="ml-1 text-xs font-thin">&#40;30&#41;</span>
						</div>
						<div className={`${categoryStyles}`}>
							<span className={`${borderStyles}`} />
							<span className="hover:text-red-600">skirts</span>
							<span className="ml-1 text-xs font-thin">&#40;10&#41;</span>
						</div>
						<div className={`${categoryStyles}`}>
							<span className={`${borderStyles}`} />
							<span className="hover:text-red-600">tops</span>
							<span className="ml-1 text-xs font-thin">&#40;20&#41;</span>
						</div>
					</div>
					<div className="flex cursor-pointer font-light pl-2 items-center">
						<span className="hover:text-red-600">accessories</span>
						<span className="ml-1 text-xs font-thin">&#40;50&#41;</span>
					</div>
					<div className="flex hover:bg-white pl-2 cursor-pointer font-light items-center">
						<span className="hover:text-red-600">bags</span>
						<span className="ml-1 text-xs font-thin">&#40;20&#41;</span>
					</div>
					<h4 className="text-lg mt-4">Price</h4>
					<span className="w-full border-t-4 flex border-black/90 mt-1" />
					<div>
						<RangeSlider
							initialMin={2500}
							initialMax={7500}
							min={0}
							max={10000}
							step={100}
							priceGap={1000}
						/>
					</div>
				</div>
			</div>
			<div className="w-full sm:w-4/5 mt-4 sm:mt-0">
				<span className="w-full border-t flex border-black/90" />
				<div className="px-4 py-2 flex justify-around items-center">
					<div>
						<p className="font-light">Sort By</p>
					</div>
					<div>
						<div>
							<div
								className="py-3 px-2 w-60 bg-black/90 text-white/70 select-none cursor-pointer mb-1"
								onClick={(e) => {
									e.stopPropagation();
									dispatch(setShown({ shown: !shown }));
								}}
							>
								<p dangerouslySetInnerHTML={{__html: sorted(sortType)}}/>
							</div>
							<div className="relative">
								<div
									className={`flex flex-col space-y-2 ${
										shown ? "absolute" : "hidden"
									} absolute w-60 top-[100%] text-black/90 shadow-md bg-white z-50`}
								>
									{options.map((option) => (
										<span
											key={option.value}
											onClick={() => {
												dispatch(sortProducts({ sortType: option.value }));
												dispatch(setShown(false));
											}}
											className="cursor-pointer w-full flex items-center justify-between hover:bg-black/90 hover:text-white/70 px-2 py-2 whitespace-nowrap"
										>
											<p dangerouslySetInnerHTML={{__html: option.option}}/>
											{option.value === sortType && (
												<CheckIcon className="h-4 w-4 font-bold" />
											)}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
					{/*showing number of results*/}
					<div className="hidden sm:block">
						<p className="font-light">Showing all 4 results</p>
					</div>
				</div>
				<span className="w-full border-t flex border-black/90" />
				{/*Products*/}
				<div
					layout="true"
					className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 w-[85%] sm:w-full mx-auto"
				>
					{products?.map((item) => (
						
							<motion.div
								layout="true"
								key={item.id}
								className="bg-gray-100"
								onMouseLeave={() => setAlternateTooltip(false)}
								onClick={() => router.push({
									pathname: "/product/[id]",
									query: {id: item.id}
								})}
							>
								<AnimatePresence>
									<Product item={item} />
								</AnimatePresence>
							</motion.div>
						
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
