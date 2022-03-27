import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {
	MenuAlt2Icon,
	XCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux"
import { setMobileNav } from "../redux/mobileNavSlice"
import NavLink from "./NavLink"

const MobileNav = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const { shown } = useSelector(state => ({...state.mobileNav}))
	return (
		<div
				className={`${
					shown ? "" : "-translate-x-[50vw]"
				} transform  transition-transform duration-500 absolute top-0 left-0 w-[50vw] z-10 bg-gray-200 h-screen md:hidden overflow-hidden`}
			>
				<div>
					<div className="flex items-center justify-between px-4 mt-2">
						<Image
							src="/lulupearl.png"
							height="24"
							width="24"
							priority
							onClick={() => {
								dispatch(setMobileNav({shown: false}))
								router.push("/");
							}}
						/>
						<XCircleIcon
							className="w-6 h-6 cursor-pointer"
							onClick={() => dispatch(setMobileNav({shown: false}))}
						/>
					</div>
					<div className="uppercase flex flex-col items-center space-y-10 font-semibold selection-none mt-8">
						<NavLink href="/" title="home"/>
						<NavLink href="/store" title="store"/>
						<NavLink href="/contact" title="contact"/>
					</div>
				</div>
			</div>
	)
}

export default MobileNav