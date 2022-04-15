import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
	SearchIcon,
	ShoppingCartIcon,
	XIcon,
	MenuAlt2Icon,
	XCircleIcon,
	UserCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Search from "./Search";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import StoreLink from "./StoreLink";
import { sortProducts } from "../redux/productSlice";
import { setStoreLinkShown, setNavSearchBar } from "../redux/elementsSlice";
import { setMobileNav } from "../redux/mobileNavSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { showSearchBar, storeLinkShown } = useSelector((state) => ({
		...state.elements,
	}));
	const { totalCount } = useSelector((state) => ({...state.cart}))
	const router = useRouter();
	const { data: session } = useSession();

	return (
		<div className="relative sticky top-0 z-50">
			<nav className="w-full bg-white py-3 h-[13vh] shadow-sm sticky top-0 z-50">
				<div className="container flex justify-between z-50">
					<div
						className={`flex ${
							showSearchBar ? "w-[90px] md:w-full" : "w-[62.5%]"
						} justify-between items-center`}
						onMouseEnter={() => {
							dispatch(setStoreLinkShown({ storeLinkShown: false }));
						}}
					>
						{!showSearchBar && (
							<MenuAlt2Icon
								className="md:hidden w-8 h-8 cursor-pointer text-gray-600"
								onClick={() => dispatch(setMobileNav({ shown: true }))}
							/>
						)}

						<div
							className="md:flex text-gray-600 uppercase font-bold text-xl select-none cursor-pointer flex items-center"
							onClick={() => {
								router.push("/");
								dispatch(setNavSearchBar({ showSearchBar: false }));
							}}
						>
							<div className="w-9 h-9 md:w-14 md:h-14 transition-all duration-500 active:bg-gray-200 flex justify-center items-center rounded-full">
								<div className="relative h-6 w-6">
									<Image src="/lulupearl.png" layout="fill" priority />
								</div>
							</div>
							<p
								className={`${
									showSearchBar ? "hidden md:inline-flex" : ""
								} md:ml-2`}
							>
								lulu<span className="text-red-500">pearl</span>
							</p>
						</div>
					</div>

					<div
						className={`${
							showSearchBar ? "block" : "hidden"
						} flex justify-center items-center bg-gray-100 rounded-lg p-0.5 flex-2 w-full`}
					>
						<Search />
					</div>

					<div className="flex items-center space-x-8 justify-center">
						<div
							className={`hidden ${
								showSearchBar ? "md:hidden" : ""
							} md:inline-flex uppercase flex space-x-8 font-semibold selection-none items-center`}
						>
							<NavLink href="/" title="home" />
							<div className="flex items-center justify-center space-x-2 relative">
								<NavLink href="/store" title="store" />
								<span
									onMouseEnter={() =>
										dispatch(setStoreLinkShown({ storeLinkShown: true }))
									}
									className={`w-0 h-0 mt-0.5 border-solid border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent ${
										storeLinkShown ? "border-red-400" : "border-gray-600"
									} cursor-pointer`}
								/>
							</div>
							<NavLink href="/contact" title="contact" />
						</div>
						<div
							className="flex justify-center items-center space-x-2 lg:space-x-5"
							onMouseEnter={() => {
								dispatch(setStoreLinkShown({ storeLinkShown: false }));
							}}
						>
							{!showSearchBar && (
								<SearchIcon
									className="h-6 w-6 cursor-pointer text-gray-600"
									onClick={() => {
										dispatch(sortProducts({ sortType: "nothing" }));
										dispatch(setNavSearchBar({ showSearchBar: true }));
										router.push("/store");
									}}
								/>
							)}
							{showSearchBar && (
								<XIcon
									className="h-6 w-6 cursor-pointer text-gray-600"
									onClick={() =>
										dispatch(setNavSearchBar({ showSearchBar: false }))
									}
								/>
							)}
							<div
								className="flex flex-col justify-center items-center mt-4"
								onClick={() => {
									dispatch(setNavSearchBar({ showSearchBar: false }));
								}}
							>
								{session ? (
									<img
										src={session?.user?.image}
										className="h-6 w-6 rounded-full object-cover"
									/>
								) : (
									<UserCircleIcon
										onClick={signOut}
										className="h-6 w-6 cursor-pointer"
									/>
								)}

								<div className="underline decoration decoration-gray-300 text-xs whitespace-nowrap font-thin cursor-pointer">
									{!session && (
										<p onClick={() => router.push("/signin")}>Sign In</p>
									)}
									{session && (
										<p>
											{session.user.name.length <= 7
												? `${session.user.name}`
												: `${session.user.name.slice(0, 6)}...`}
										</p>
									)}
								</div>
							</div>
							<div className="relative" onClick={() => router.push("/cart")}>
								<ShoppingCartIcon
									className="p-2 bg-gray-200 rounded-full h-9 w-9 cursor-pointer"
									onClick={() =>
										dispatch(setNavSearchBar({ showSearchBar: false }))
									}
								/>
								<span className="h-4 w-4 flex justify-center items-center bg-red-400 rounded-full p-2 absolute -top-2 -right-1 text-xs text-white">
									{totalCount}
								</span>
							</div>
						</div>
					</div>
				</div>

				<MobileNav />
			</nav>
			{/*storelink*/}
			<StoreLink />
		</div>
	);
};

export default Navbar;
