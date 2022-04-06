import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	MenuAlt2Icon,
	XCircleIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { setMobileNav, toggleExpanded } from "../redux/mobileNavSlice";
import NavLink from "./NavLink";

const MobileNav = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { shown, itemExpanded: {clothingItems, shoeItems, accessoryItems} } = useSelector(
		(state) => ({ ...state.mobileNav })
	);
	const { clothing, shoes, accessories } = useSelector((state) => ({
		...state.storelink,
	}));
	const [expanded, setExpanded] = useState(false);
	const [display, setDisplay] = useState(false);
	console.log( {clothingItems, shoeItems, accessoryItems} );

	const toggleMain = () => {
		if (!expanded) {
			return (
				<ChevronDownIcon
					className="font-bold w-5 h-5 cursor-pointer"
					onClick={() => setExpanded(true)}
				/>
			);
		} else {
			return (
				<ChevronUpIcon
					className="font-bold w-5 h-5 cursor-pointer"
					onClick={() => setExpanded(false)}
				/>
			);
		}
	};

	const DisplayItems = ({ item, display }) => {
		return (
			<div>
				{display && (
					<div className="flex flex-col ml-4 text-xs space-y-[5px] cursor-pointer">
						{item.map((itm, idx) => (
							<span key={idx} onClick={() => dispatch(setMobileNav({shown: false}))}>{itm}</span>
						))}
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="flex">
			<div
				className={`${
					shown ? "" : "-translate-x-[50vw]"
				} transform  transition-transform duration-500 absolute top-0 left-0 w-[50vw] z-10 bg-gray-200 h-screen md:hidden overflow-hidden`}
			>
				<div className="px-4">
					<div className="flex items-center justify-between mt-2">
						<Image
							src="/lulupearl.png"
							height="24"
							width="24"
							priority
							onClick={() => {
								dispatch(setMobileNav({ shown: false }));
								router.push("/");
							}}
						/>
						<XCircleIcon
							className="w-6 h-6 cursor-pointer"
							onClick={() => dispatch(setMobileNav({ shown: false }))}
						/>
					</div>
					<div className="uppercase flex flex-col space-y-10 font-semibold selection-none mt-8">
						<NavLink href="/" title="home" />
						<div>
							<div className="flex justify-between">
								<NavLink href="/store" title="store" />
								{toggleMain()}
							</div>
							{expanded && (
								<div className="text-sm font-normal ml-4 mt-4 space-y">
									<div>
										<div
											className="flex justify-between cursor-pointer"
											onClick={() => {
												dispatch(
													toggleExpanded({
														accessoryItems: accessoryItems,
														clothingItems: !clothingItems,
														shoeItems: shoeItems
													})
												);
											}}
										>
											<p className="mb-2 font-semibold">Clothing</p>
											{!clothingItems ? (
												<ChevronDownIcon className="font-bold w-5 h-5 cursor-pointer" />
											) : (
												<ChevronUpIcon className="font-bold w-5 h-5 cursor-pointer" />
											)}
										</div>
										<DisplayItems item={clothing} display={clothingItems} />
									</div>
									<div>
										<div
											className="flex justify-between cursor-pointer mt-2"
											onClick={() => {
												dispatch(
													toggleExpanded({
														accessoryItems: accessoryItems,
														clothingItems: clothingItems,
														shoeItems: !shoeItems
													})
												);
											}}
										>
											<p className="mb-2 font-semibold">Shoes</p>
											{!shoeItems ? (
												<ChevronDownIcon className="font-bold w-5 h-5 cursor-pointer" />
											) : (
												<ChevronUpIcon className="font-bold w-5 h-5 cursor-pointer" />
											)}
										</div>
										<DisplayItems item={shoes} display={shoeItems} />
									</div>
									<div>
										<div
											className="flex justify-between cursor-pointer mt-2"
											onClick={() => {
												dispatch(
													toggleExpanded({
														accessoryItems: !accessoryItems,
														clothingItems: clothingItems,
														shoeItems: shoeItems
													})
												);
											}}
										>
											<p className="mb-2 font-semibold">Accessories</p>
											{!accessoryItems ? (
												<ChevronDownIcon className="font-bold w-5 h-5 cursor-pointer" />
											) : (
												<ChevronUpIcon className="font-bold w-5 h-5 cursor-pointer" />
											)}
										</div>
										<DisplayItems item={accessories} display={accessoryItems} />
									</div>
								</div>
							)}
						</div>
						<NavLink href="/contact" title="contact" />
					</div>
				</div>
			</div>
			<div
				className={`${
					shown &&
					"animate-fadein md:hidden absolute top-0 right-0 w-[100vw] bg-black/90 h-screen overflow-hidden"
				} ${!shown && "fadeout"}`}
			/>
		</div>
	);
};

export default MobileNav;
