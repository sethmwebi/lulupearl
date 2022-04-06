import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux"
import { setStoreLinkShown } from "../redux/elementsSlice";
import { setMobileNav } from "../redux/mobileNavSlice"

const NavLink = ({ href, title }) => {
	const router = useRouter();
	const dispatch = useDispatch()
	const { storeLinkShown } = useSelector((state) => ({ ...state.elements }));
	return (
		<Link href={href} passHref>
			<a
				className={`${router.pathname == href ? "active" : ""}  !hover:link`}
				onMouseEnter={() => {
					dispatch(setStoreLinkShown({ storeLinkShown: false }));
				}}
				onClick={() => dispatch(setMobileNav({shown: false}))}
			>
				{title}
			</a>
		</Link>
	);
};

export default NavLink;
